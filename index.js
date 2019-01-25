// Based on https://play.google.com/store/apps/details?id=com.app.upswingpoker (onlinecashrange)
const Seats = {
    SB: 'sb',
    BB: 'bb',
    UTG: 'utg',
    UTG1: 'utg+1',
    UTG2: 'utg+2',
    LJ: 'lojack',
    HJ: 'hijack',
    CO: 'cutoff',
    BTN: 'button'
};

const Actions = {
    Raise: 'raise',
    RaiseFold: 'raise|fold',
    RaiseCall: 'raise|call',
    RaiseCallFold: 'raise|call|fold',
    Call: 'call',
    CallFold: 'call|fold',
    Fold: 'fold'
};

const FirstIn = new Map([
    [Seats.SB, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
            'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s',
            'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s',
            'JTs', 'J9s', 'J8s', 'J7s', 'J6s',
            'T9s', 'T8s', 'T7s', 'T6s',
            '98s', '97s', '96s',
            '87s', '86s', '85s',
            '76s', '75s',
            '65s', '64s',
            '54s', '53s',
            '43s',
            'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o',
            'KQo', 'KJo', 'KTo', 'K9o', 'K8o',
            'QJo', 'QTo', 'Q9o',
            'JTo', 'J9o',
            'T9o',
            '98o'
        ])],
        [Actions.RaiseFold, new Set([
            'K2s',
            'Q4s', 'Q3s',
            'J5s', 'J4s',
            'T5s',
            '95s',
            '84s',
            '74s', '73s',
            '63s',
            '42s',
            '32s',
            'K7o', 'K6o', 'K5o',
            'Q8o', 'Q7o',
            'J8o', 'J7o',
            'T8o', 'T7o',
            '97o',
            '87o', '86o',
            '76o',
            '65o'
        ])]
    ])],
    [Seats.BTN, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
            'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s',
            'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s',
            'JTs', 'J9s', 'J8s', 'J7s',
            'T9s', 'T8s', 'T7s',
            '98s', '97s', '96s',
            '87s', '86s', '85s',
            '76s', '75s',
            '65s', '64s',
            '54s', '53s',
            '43s',
            'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o',
            'KQo', 'KJo', 'KTo', 'K9o',
            'QJo', 'QTo', 'Q9o',
            'JTo', 'J9o',
            'T9o'
        ])],
        [Actions.RaiseFold, new Set([
            'K3s', 'K2s',
            'Q5s', 'Q4s', 'Q3s',
            'J6s', 'J5s',
            'T6s', 'T5s',
            '95s',
            '84s',
            '74s', '73s',
            '63s',
            '42s',
            '32s',
            'A3o', 'A2o',
            'K8o', 'K7o',
            'Q8o',
            'J8o',
            'T8o',
            '98o', '97o',
            '87o',
            '76o'
        ])]
    ])],
    [Seats.CO, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
            'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s',
            'QJs', 'QTs', 'Q9s', 'Q8s',
            'JTs', 'J9s', 'J8s',
            'T9s', 'T8s',
            '98s', '97s',
            '87s', '86s',
            '76s', '75s',
            '65s',
            '54s',
            'AKo', 'AQo', 'AJo', 'ATo',
            'KQo', 'KJo', 'KTo',
            'QJo', 'QTo',
            'JTo'
        ])],
        [Actions.RaiseFold, new Set([
            'K5s', 'K4s',
            'Q7s', 'Q6s',
            'J7s', 'J6s',
            'T7s', 'T6s',
            '96s', '95s',
            '85s',
            '74s',
            '64s',
            '53s',
            '43s',
            'A9o',
            'K9o',
            'Q9o',
            'J9o',
            'T9o'
        ])]
    ])],
    [Seats.HJ, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
            'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
            'KQs', 'KJs', 'KTs', 'K9s',
            'QJs', 'QTs', 'Q9s',
            'JTs', 'J9s',
            'T9s',
            '98s',
            '87s',
            '76s',
            '65s',
            'AKo', 'AQo', 'AJo', 'ATo',
            'KQo', 'KJo',
            'QJo'
        ])],
        [Actions.RaiseFold, new Set([
            'K8s', 'K7s', 'K6s',
            'Q8s',
            'J8s',
            'T8s',
            '97s',
            '86s',
            '75s',
            '64s',
            '54s',
            'KTo',
            'QTo',
            'JTo'
        ])]
    ])],
    [Seats.LJ, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55',
            'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
            'KQs', 'KJs', 'KTs', 'K9s',
            'QJs', 'QTs', 'Q9s',
            'JTs', 'J9s',
            'T9s',
            '98s',
            '87s',
            '76s',
            'AKo', 'AQo', 'AJo',
            'KQo'
        ])],
        [Actions.RaiseFold, new Set([
            '44', '33', '22',
            'K8s',
            'T8s',
            '97s',
            '65s',
            '54s',
            'ATo',
            'KJo',
            'QJo'
        ])]
    ])],
    [Seats.UTG2, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55',
            'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A5s', 'A4s',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            'T9s',
            '98s',
            '87s',
            'AKo', 'AQo'
        ])],
        [Actions.RaiseFold, new Set([
            '44',
            'A7s', 'A6s', 'A3s', 'A2s',
            'K9s',
            'Q9s',
            'J9s',
            '76s',
            '65s',
            'AJo',
            'KQo'
        ])]
    ])],
    [Seats.UTG1, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77',
            'AKs', 'AQs', 'AJs', 'ATs',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            'T9s',
            'AKo', 'AQo'
        ])],
        [Actions.RaiseFold, new Set([
            '66', '55',
            'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
            '98s',
            '87s',
            '76s'
        ])]
    ])],
    [Seats.UTG, new Map([
        [Actions.Raise, new Set([
            'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77',
            'AKs', 'AQs', 'AJs', 'ATs',
            'KQs', 'KJs', 'KTs',
            'QJs', 'QTs',
            'JTs',
            'T9s',
            'AKo', 'AQo'
        ])],
        [Actions.RaiseFold, new Set([
            '66', '55',
            'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
            '98s',
            '87s'
        ])]
    ])]
]);

/////

const allActions = [
    Actions.Raise, Actions.RaiseFold, Actions.RaiseCall, Actions.RaiseCallFold, Actions.Call, Actions.CallFold, Actions.Fold
];

const getAction = (table, handRep) => {
    for (let i = 0; i < allActions.length; ++i) {
        const action = allActions[i];
        const range = table.get(action);
        if (range && range.has(handRep)) {
            return action;
        }
    }
    return Actions.Fold;
};


const PlayersToSeats = new Map([
    [4, [Seats.SB, Seats.BB, Seats.CO, Seats.BTN]],
    [5, [Seats.SB, Seats.BB, Seats.HJ, Seats.CO, Seats.BTN]],
    [6, [Seats.SB, Seats.BB, Seats.LJ, Seats.HJ, Seats.CO, Seats.BTN]],
    [7, [Seats.SB, Seats.BB, Seats.UTG2, Seats.LJ, Seats.HJ, Seats.CO, Seats.BTN]],
    [8, [Seats.SB, Seats.BB, Seats.UTG1, Seats.UTG2, Seats.LJ, Seats.HJ, Seats.CO, Seats.BTN]],
    [9, [Seats.SB, Seats.BB, Seats.UTG, Seats.UTG1, Seats.UTG2, Seats.LJ, Seats.HJ, Seats.CO, Seats.BTN]],
]);


const getFirstInAction = (players, position, handRep) => {
    const seats = PlayersToSeats.get(players)
    if (seats) {
        const seat = seats[position];
        const table = FirstIn.get(seat);
        return getAction(table, handRep);
    }
    
    return null;
};

//////////////////////////////////////////////////

const { Games, Bets } = require('@openhud/api');
const { represent } = require('@openhud/helpers');

const raiseFirstInRange = (players, position) => {
    const playersBehind = players - position - 1;

    return tables[tables.length - playersBehind];
};

const generateTip = (game, bb, seats, community) => {
    const tip = { players: {} };

    if (game.type === Games.TexasHoldem && game.bet === Bets.NoLimit) {
        const players = seats.length;
        const mySeatId = seats.findIndex(seat => seat.isMe);
        const btnSeatId = seats.findIndex(seat => seat.isButton);

        if (mySeatId !== -1) {
            const mySeat = seats[mySeatId];
            const myHand = mySeat.cards;
            if (myHand.length === 0) {
                throw {
                    type: 'https://www.openhud.io/errors/invalid-data',
                    detail: 'Hero cards are missing'
                };
            }
            const myHandRep = represent({ hand: myHand });

            const index = (mySeatId - (btnSeatId + 1) + players) % players;

            const firstInAction = getFirstInAction(players, index, myHandRep);
            if (firstInAction) {
                tip.players[mySeat.playerName] = `${myHandRep} should ${firstInAction} if first in.`;
            }
        }
    }

    return tip;
};

//////////

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const functions = require('firebase-functions');


const app = express()
app.use(cors({
    origin: true,
    maxAge: 86400
}));
app.use(bodyParser.json());


const errors = {
    'https://www.openhud.io/errors/invalid-data': {
        status: 400,
        title: 'Invalid Data'
    }
};


app.post('/', (request, response) => {
    try {
        const { game, bb, seats, community } = request.body;

        const tip = generateTip(game, bb, seats, community);

        response.status(200).send(tip);
    } catch (e) {
        const error = errors[e.type];
        const result = {
            type: e.type,
            title: error.title,
            detail: e.detail
        };
        response.status(error.status).send(result);
    }
});

const metadata = {
    title: 'Upswing Poker',
    description: 'Upswing Poker Preflop Guide, Holdem Raising-First-In (https://upswingpoker.com/wp-content/uploads/2018/02/Preflop-Guide-for-RFI-v21-1.pdf)',
    games: [{
        type: Games.TexasHoldem,
        bet: Bets.NoLimit,
        format: '*'
    }],
    author: {
        name: "Danny Leshem",
        email: "dleshem@gmail.com"
    }
};

app.get('/', (request, response) => {
    response.status(200).send(metadata);
});


module.exports = {
    openhud: functions.https.onRequest(app)
};