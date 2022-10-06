'reach 0.1';

const[isFingers, ZERO, ONE, TWO, THREE, FOUR, FIVE] = makeEnum(6);
const[isGuess, ZEROG, ONEG, TWOG, THREEG, FOURG, FIVEG, SIXG, SEVENG, EIGHTG, NINEG, TENG] = makeEnum(11);
const[isOutcome, B_WINS, DRAW, A_WINS] = makeEnum(3);

const winner = (fingerA, fingerB, guessA, guessB) => {
    const total = fingerA + fingerB;

    if (guessA == guessB){
        const result = DRAW; // tie
        return result;
    } else {
        if (total == guessA){
            const result = A_WINS;
            return result; // player A wins
        } else if (total == guessB){
            const result = B_WINS;
            return result; // player B wins
        } else {
            const result = DRAW; // tie
            return result;
        }
    }
};

// assets for all combinations
// assert(winner(ZERO,TWO,ZEROG,TWOG)== B_WINS);
// assert(winner(TWO,ZERO,TWOG,ZEROG)== A_WINS);
// assert(winner(ZERO,ONE,ZEROG,TWOG)== DRAW);
// assert(winner(ONE,ONE,ONEG,ONEG)== DRAW);
assert(winner(ONE, THREE, ONEG, FOURG) == B_WINS);
assert(winner(THREE, ONE, FOURG, ONEG) == A_WINS);
assert(winner(ZERO,ONE,ZEROG,TWOG)== DRAW); // Both wrong
assert(winner(TWO, TWO, FOURG, FOURG) == DRAW); // Both correct

// asserts for a draw - each guesses the same
forall(UInt, fingerA =>
    forall(UInt, fingerB =>
        forall(UInt, guessA =>
            forall(UInt, guessB =>
                assert(isOutcome(winner(fingerA, fingerB, guessA, guessB)))))));

forall(UInt, fingerA =>
    forall(UInt, fingerB =>
        forall(UInt, guess =>
            assert(isOutcome(winner(fingerA, fingerB, guess, guess))))));

// added a timeout function
const Player = {
    ...hasRandom,
    getFingers: Fun([], UInt),
    getGuess: Fun([UInt], UInt),
    // seeWinning: Fun([UInt], Null),
    seeOutcome: Fun([UInt], Null),
    informTimeout: Fun([], Null)
};

export const main = Reach.App(() => {
    const Alice = Participant('Alice',{
        ...Player,
        wager: UInt,
        deadline: UInt,
    });
    const Bob = Participant('Bob',{
        ...Player,
        acceptWager: Fun([UInt], Null)
    });
    init();

    const informTimeout = () => {
        each([Alice,Bob], () => {
            interact.informTimeout();
        })
    };

    Alice.only(() => {
        const wager = declassify(interact.wager);
        const deadline = declassify(interact.deadline);
    });
    Alice.publish(wager, deadline)
       .pay(wager);
    commit();

    Bob.only(() => {
        interact.acceptWager(wager);
    });
    Bob.pay(wager)
       .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));

    var outcome = DRAW;
    invariant(balance() == 2 * wager && isOutcome(outcome));
    while(outcome == DRAW){
        commit();

        Alice.only(() => {
            // Alice's finger
            const _fingerA = interact.getFingers();
            const [_commitA, _saltA] = makeCommitment(interact, _fingerA);
            const commitA = declassify(_commitA);
            // Alice's guess
            const _guessA = interact.getGuess(_fingerA);
            const [_guessCommitA, _guessSaltA] = makeCommitment(interact, _guessA);
            const guessCommitA = declassify(_guessCommitA);
        });
        Alice.publish(commitA, guessCommitA)
           .timeout(relativeTime(deadline), () => closeTo(Bob, informTimeout));
        commit();

        // Bob does not know the values for Alice, but Alice knows the values
        unknowable(Bob, Alice(_fingerA, _saltA, _guessA, _guessSaltA));

        Bob.only(() => {
            const fingerB = declassify(interact.getFingers());
            const guessB = declassify(interact.getGuess(fingerB));
        });
        Bob.publish(fingerB, guessB)
           .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
        commit();

        // Alice will declassify the secret information
        Alice.only(() => {
            const [saltA, fingerA] = declassify([_saltA, _fingerA]);
            const [guessSaltA, guessA] = declassify([_guessSaltA, _guessA]);
        });

        Alice.publish(saltA, fingerA, guessSaltA, guessA)
           .timeout(relativeTime(deadline), () => {closeTo(Bob, informTimeout)});
        
        checkCommitment(commitA, saltA, fingerA);
        checkCommitment(guessCommitA, guessSaltA, guessA);

        // commit();

        // Alice.only(() => {
        //     const WinningNumber = fingerA + fingerB;
        //     interact.seeWinning(WinningNumber);
        // });

        // Alice.publish(WinningNumber)
        //    .timeout(relativeTime(deadline), () => closeTo(Alice, informTimeout));
 
        outcome = winner(fingerA, fingerB, guessA, guessB);
        continue;
    }

    assert(outcome == A_WINS || outcome == B_WINS);
    // send winnings to winner
    transfer(2 * wager).to(outcome == A_WINS ? Alice : Bob);
    commit();

    each([Alice, Bob], ()=> {
        interact.seeOutcome(outcome);
    });
});


