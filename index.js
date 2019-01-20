const utg = new Set([
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77',
    'AKs', 'AQs', 'AJs', 'ATs', 'A5s',
    'KQs', 'KJs', 'KTs',
    'QJs', 'QTs',
    'JTs', 'J9s',
    'T9s',
    '98s',
    'AKo', 'AQo'
]);

const utgPlus1 = new Set([
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77',
    'AKs', 'AQs', 'AJs', 'ATs', 'A5s',
    'KQs', 'KJs', 'KTs',
    'QJs', 'QTs',
    'JTs', 'J9s',
    'T9s',
    '98s',
    'AKo', 'AQo'
]);

const utgPlus2 = new Set([
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A5s', 'A4s',
    'KQs', 'KJs', 'KTs', 'K9s',
    'QJs', 'QTs', 'Q9s',
    'JTs', 'J9s',
    'T9s',
    '98s',
    'AKo', 'AQo', 'AJo'
]);

const lojack = new Set([
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s',
    'QJs', 'QTs', 'Q9s',
    'JTs', 'J9s',
    'T9s', 'T8s',
    '98s',
    '87s',
    '76s',
    'AKo', 'AQo', 'AJo',
    'KQo'
]);

const hijack = new Set([
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s',
    'QJs', 'QTs', 'Q9s',
    'JTs', 'J9s',
    'T9s', 'T8s',
    '98s', '97s',
    '87s',
    '76s',
    '65s',
    'AKo', 'AQo', 'AJo', 'ATo',
    'KQo', 'KJo',
    'QJo'
]);

const cutoff = new Set([
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s', 'K8s',
    'QJs', 'QTs', 'Q9s', 'Q8s',
    'JTs', 'J9s', 'J8s',
    'T9s', 'T8s',
    '98s', '97s',
    '87s', '86s',
    '76s',
    '65s',
    '54s',
    'AKo', 'AQo', 'AJo', 'ATo',
    'KQo', 'KJo', 'KTo',
    'QJo', 'QTo',
    'JTo'
]);

const button = new Set([
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
    '54s',
    '43s',
    'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o',
    'KQo', 'KJo', 'KTo', 'K9o',
    'QJo', 'QTo', 'Q9o',
    'JTo', 'J9o',
    'T9o'
]);

const sb = new Set([
    'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',
    'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
    'KQs', 'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
    'QJs', 'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s',
    'JTs', 'J9s', 'J8s', 'J7s', 'J6s',
    'T9s', 'T8s', 'T7s', 'T6s',
    '98s', '97s', '96s', '95s',
    '87s', '86s', '85s', '84s',
    '76s', '75s', '74s',
    '65s', '64s', '63s',
    '54s', '53s',
    '43s',
    '32s',
    'AKo', 'AQo', 'AJo', 'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o',
    'KQo', 'KJo', 'KTo', 'K9o', 'K8o',
    'QJo', 'QTo', 'Q9o', 'Q8o',
    'JTo', 'J9o', 'J8o',
    'T9o', 'T8o',
    '98o'
]);

const tables = [utg, utgPlus1, utgPlus2, lojack, hijack, cutoff, button, sb];

//////////////////////////////////////////////////

const { Games, Bets } = require('@openhud/api');
const { represent, representRange } = require('@openhud/helpers');

const raiseFirstInRange = (players, position) => {
    const playersBehind = players - position - 1;

    return tables[tables.length - playersBehind];
};

const generateTip = (game, bb, seats, community) => {
    const tip = { players: {} };

    if (game.type === Games.TexasHoldem) {
        const mySeatId = seats.findIndex(seat => seat.isMe);
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

            const btnSeatId = seats.findIndex(seat => seat.isButton);
            const myPreFlopPosition = (mySeatId + (seats.length - 3 - btnSeatId) + seats.length) % seats.length;

            if (myPreFlopPosition !== seats.length - 1) {
                const range = raiseFirstInRange(seats.length, myPreFlopPosition);
                if (range.has(myHandRep)) {
                    tip.players[mySeat.playerName] = `${myHandRep} should raise if first in (range: ${representRange({ range })}).`;
                } else {
                    tip.players[mySeat.playerName] = `${myHandRep} should fold even if first in.`;
                }
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