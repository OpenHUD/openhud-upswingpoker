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
    ])]
]);

const Raise = new Map([
    [Seats.SB, new Map([
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77',
                'QJs',
                'AQo'
            ])]
        ])],
        [Seats.UTG1, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77',
                'QJs',
                'AQo'
            ])]
        ])],
        [Seats.UTG2, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77',
                'QJs',
                'AQo'
            ])]
        ])],
        [Seats.LJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ',
                'AKs',
                'AKo'
            ])],
            [Actions.RaiseCall, new Set([
                'JJ',
                'AQs', 'AJs', 'ATs',
                'KQs'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77',
                'QJs',
                'JTs',
                'AQo'
            ])]
        ])],
        [Seats.HJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ',
                'AKs',
                'AKo'
            ])],
            [Actions.RaiseCall, new Set([
                'JJ',
                'AQs', 'AJs', 'ATs',
                'KQs', 'KJs',
                'QJs',
                'JTs',
                'AQo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66',
                'T9s'
            ])]
        ])],
        [Seats.CO, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ',
                'AKs',
                'AKo'
            ])],
            [Actions.RaiseCall, new Set([
                'JJ',
                'AQs', 'AJs', 'ATs', 'A9s', 'A5s', 'A4s',
                'KQs', 'KJs',
                'QJs',
                'JTs',
                'T9s',
                '98s',
                'AQo', 'AJo',
                'KQo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55',
                'KTs',
                'QTs'
            ])]
        ])],
        [Seats.BTN, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ', 'JJ', 'TT', '99', '88', '77', '66', '55',
                'AKs', 'AQs', 'AJs', 'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KQs', 'KJs', 'KTs', 'K9s',
                'QJs', 'QTs', 'Q9s',
                'JTs', 'J9s',
                'T9s', 'T8s',
                '98s',
                '87s',
                '76s',
                'AKo', 'AQo', 'AJo', 'ATo',
                'KQo'
            ])],
            [Actions.RaiseFold, new Set([
                '44', '33', '22',
                '97s',
                '86s',
                '75s',
                '65s',
                '54s',
                'KJo',
                'QJo'
            ])]
        ])]
    ])],
    [Seats.BB, new Map([
        [Seats.SB, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ', 'JJ', 'TT', '99',
                'AKs', 'AQs', 'AJs',
                'KQs',
                'QJs',
                'JTs',
                'T9s',
                '98s'
            ])],
            [Actions.RaiseCall, new Set([
                '88', '77', '66', '55', '44',
                'ATs', 'A9s', 'A8s', 'A5s', 'A4s', 'A3s',
                'KJs', 'KTs', 'K9s',
                'QTs', 'Q9s',
                'J9s',
                'T8s',
                '97s',
                '87s', '86s',
                '76s', '75s',
                '65s', '64s',
                '54s',
                'AJo',
                'KQo'
            ])],
            [Actions.Call, new Set([
                '33', '22',
                'A7s', 'A6s', 'A2s',
                'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
                'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s', 'Q3s', 'Q2s',
                'J8s', 'J7s', 'J6s', 'J5s', 'J4s',
                'T7s', 'T6s', 'T5s', 'T4s',
                '96s', '95s', '94s',
                '85s', '84s',
                '74s', '73s',
                '63s', '62s',
                '53s', '52s',
                '43s', '42s',
                '32s',
                'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A3o', 'A2o',
                'KJo', 'KTo', 'K9o', 'K8o', 'K7o', 'K6o', 'K5o',
                'QJo', 'QTo', 'Q9o', 'Q8o', 'Q7o',
                'JTo', 'J9o', 'J8o', 'J7o',
                'T9o', 'T8o', 'T7o',
                '98o', '97o',
                '87o',
                '76o',
                '65o'
            ])]
        ])],        
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55', '44', '33', '22',
                'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KJs', 'KTs', 'K9s',
                'QJs', 'QTs', 'Q9s',
                'JTs', 'J9s',
                'T9s',
                '98s',
                '87s',
                '76s',
                'AQo', 'AJo',
                'KQo'
            ])]
        ])],
        [Seats.UTG1, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55', '44', '33', '22',
                'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KJs', 'KTs', 'K9s',
                'QJs', 'QTs', 'Q9s',
                'JTs', 'J9s',
                'T9s',
                '98s',
                '87s',
                '76s',
                'AQo', 'AJo',
                'KQo'
            ])]
        ])],
        [Seats.UTG2, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55', '44', '33', '22',
                'ATs', 'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KJs', 'KTs', 'K9s', 'K8s',
                'QJs', 'QTs', 'Q9s',
                'JTs', 'J9s',
                'T9s', 'T8s',
                '98s',
                '87s',
                '76s',
                '65s',
                'AQo', 'AJo', 'ATo',
                'KQo', 'KJo',
                'QJo'
            ])]
        ])],
        [Seats.LJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs',
                'AKo'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ', 'TT',
                'AQs', 'AJs', 'ATs',
                'KQs'
            ])],
            [Actions.Call, new Set([
                '99', '88', '77', '66', '55', '44', '33', '22',
                'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s',
                'QJs', 'QTs', 'Q9s', 'Q8s',
                'JTs', 'J9s', 'J8s',
                'T9s', 'T8s',
                '98s', '97s',
                '87s', '86s',
                '76s',
                '65s',
                '54s',
                'AQo', 'AJo', 'ATo',
                'KQo', 'KJo', 'KTo',
                'QJo', 'QTo',
                'JTo'
            ])]
        ])],
        [Seats.HJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ',
                'AKs', 'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.RaiseCall, new Set([
                'JJ', 'TT',
                'ATs',
                'KJs',
                'QJs',
                'JTs'
            ])],
            [Actions.Call, new Set([
                '99', '88', '77', '66', '55', '44', '33', '22',
                'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KJs', 'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s',
                'QTs', 'Q9s', 'Q8s', 'Q7s',
                'J9s', 'J8s', 'J7s',
                'T9s', 'T8s', 'T7s',
                '98s', '97s', '96s',
                '87s', '86s',
                '76s', '75s',
                '65s',
                '54s',
                '43s',
                'AQo', 'AJo', 'ATo',
                'KQo', 'KJo', 'KTo',
                'QJo', 'QTo',
                'JTo'
            ])]
        ])],
        [Seats.CO, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ',
                'AKs', 'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.RaiseCall, new Set([
                'JJ', 'TT', '99',
                'ATs', 'A9s', 'A8s', 'A5s', 'A4s',
                'KJs',
                'QJs',
                'JTs',
                'T9s',
                '98s',
                '87s',
                '76s',
                '65s',
                '54s',
                'AQo', 'AJo',
                'KQo'
            ])],
            [Actions.Call, new Set([
                '88', '77', '66', '55', '44', '33', '22',
                'A7s', 'A6s', 'A3s', 'A2s',
                'KTs', 'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
                'QTs', 'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s',
                'J9s', 'J8s', 'J7s', 'J6s',
                'T8s', 'T7s', 'T6s',
                '97s', '96s',
                '86s', '85s',
                '75s', '74s',
                '64s',
                '53s',
                '43s',
                'ATo', 'A9o', 'A8o', 'A7o', 'A5o',
                'KJo', 'KTo', 'K9o',
                'QJo', 'QTo', 'Q9o',
                'JTo', 'J9o',
                'T9o'
            ])]
        ])],
        [Seats.BTN, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ', 'JJ', 'TT',
                'AKs', 'AQs', 'AJs', 'ATs',
                'KQs', 'KJs',
                'QJs', 'JTs',
                'AKo', 'AQo'
            ])],
            [Actions.RaiseCall, new Set([
                '99', '88',
                'A9s', 'A8s', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KTs',
                'QTs',
                'J9s',
                'T9s',
                '98s',
                '87s',
                '76s',
                '65s',
                '54s',
                'AJo',
                'KQo'
            ])],
            [Actions.Call, new Set([
                '77', '66', '55', '44', '33', '22',
                'K9s', 'K8s', 'K7s', 'K6s', 'K5s', 'K4s', 'K3s', 'K2s',
                'Q9s', 'Q8s', 'Q7s', 'Q6s', 'Q5s', 'Q4s', 'Q3s', 'Q2s',
                'J8s', 'J7s', 'J6s', 'J5s',
                'T8s', 'T7s', 'T6s', 'T5s',
                '97s', '96s', '95s',
                '86s', '85s', '84s',
                '75s', '74s',
                '64s', '63s',
                '53s',
                '43s', '42s',
                '32s',
                'ATo', 'A9o', 'A8o', 'A7o', 'A6o', 'A5o', 'A4o', 'A3o', 'A2o',
                'KJo', 'KTo', 'K9o', 'K8o', 'K7o',
                'QJo', 'QTo', 'Q9o', 'Q8o',
                'JTo', 'J9o', 'J8o',
                'T9o', 'T8o',
                '98o',
                '87o'
            ])]
        ])]
    ])],
    [Seats.UTG1, new Map([
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])]
    ])],
    [Seats.UTG2, new Map([
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])],
        [Seats.UTG1, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])]        
    ])],
    [Seats.LJ, new Map([
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])],
        [Seats.UTG1, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])],
        [Seats.UTG2, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs', 'ATs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88',
                'QJs'
            ])]
        ])]            
    ])],
    [Seats.HJ, new Map([
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])],
        [Seats.UTG1, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])],
        [Seats.UTG2, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs', 'ATs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88',
                'QJs',
                'JTs'
            ])]
        ])],
        [Seats.LJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK', 'QQ',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'JJ',
                'AQs', 'AJs', 'ATs',
                'KQs', 'KJs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77',
                'QJs',
                'JTs',
                'AQo'
            ])]
        ])]
    ])],
    [Seats.CO, new Map([
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88'
            ])]
        ])],
        [Seats.UTG1, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88',
                'QJs'
            ])]
        ])],
        [Seats.UTG2, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77',
                'QJs',
                'AQo'
            ])]
        ])],
        [Seats.LJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66',
                'ATs',
                'KJs',
                'QJs',
                'JTs',
                'AQo'
            ])]
        ])],
        [Seats.HJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs', 'A5s', 'A4s',
                'T9s'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo', 'AQo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55',
                'ATs',
                'KJs',
                'QJs',
                'JTs'
            ])]
        ])]        
    ])],
    [Seats.BTN, new Map([
        [Seats.UTG, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55',
                'ATs',
                'KJs',
                'QJs',
                'JTs',
                'T9s',
                '98s',
                'AQo'
            ])]
        ])],
        [Seats.UTG1, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55',
                'ATs',
                'KJs',
                'QJs',
                'JTs',
                'T9s',
                '98s',
                'AQo'
            ])]
        ])],
        [Seats.UTG2, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs', 'A5s',
                'KQs',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55', '44',
                'ATs',
                'KJs', 'KTs',
                'QJs', 'QTs',
                'JTs',
                'T9s',
                '98s',
                '87s',
                'AQo', 'AJo',
                'KQo'
            ])]
        ])],
        [Seats.LJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs', 'A5s', 'A4s', 'A3s', 'A2s',
                'AKo'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ'
            ])],
            [Actions.RaiseFold, new Set([
                'A9s', 'A8s', 'A7s', 'A6s',
                'AJo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55',
                'AQs', 'AJs', 'ATs',
                'KQs', 'KJs', 'KTs',
                'QJs', 'QTs',
                'JTs',
                'T9s',
                '98s',
                '87s',
                'AQo'
            ])]
        ])],
        [Seats.HJ, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs', 'A5s', 'A4s'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ',
                'AQs', 'AJs', 'A8s', 'A3s', 'A2s',
                'KQs',
                '76s',
                '65s',
                '54s',
                'AKo'
            ])],
            [Actions.Call, new Set([
                'TT', '99', '88', '77', '66', '55', '44', '33',
                'ATs', 'A9s',
                'KJs', 'KTs',
                'QJs', 'QTs',
                'JTs',
                'T9s',
                '98s',
                '87s',
                'AQo', 'AJo',
                'KQo'
            ])]
        ])],
        [Seats.CO, new Map([
            [Actions.Raise, new Set([
                'AA', 'KK',
                'AKs'
            ])],
            [Actions.RaiseCall, new Set([
                'QQ', 'JJ', 'TT',
                'AQs', 'AJs', 'ATs', 'A7s', 'A6s', 'A5s', 'A4s', 'A3s', 'A2s',
                'KQs', 'KJs',
                'QJs',
                'JTs',
                'T9s',
                '76s',
                '65s',
                '54s',
                'AKo', 'AQo', 'AJo',
                'KQo'
            ])],
            [Actions.Call, new Set([
                '99', '88', '77', '66', '55', '44', '33', '22',
                'A9s', 'A8s',
                'KTs',
                'QTs',
                '98s',
                '87s'
            ])]
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
        if (table) {
            return getAction(table, handRep);
        }
    }
    
    return null;
};

const getRaiseAction = (players, position, raiserPosition, handRep) => {
    const seats = PlayersToSeats.get(players);
    if (seats) {
        const seat = seats[position];
        const tables = Raise.get(seat);
        if (tables) {
            const raiserSeat = PlayersToSeats.get(raiserPosition);
            const table = tables.get(raiserSeat);
            if (table) {
                return getAction(table, handRep);
            }
        }
    }

    return null;
};

//////////////////////////////////////////////////

const { Games, Bets } = require('@openhud/api');
const { represent } = require('@openhud/helpers');

const reorderBtnLast = seats => {
    const reordered = [];

    const btnSeatId = seats.findIndex(seat => seat.isButton);
    for (let i = btnSeatId + 1; i < seats.length; ++i) {
        reordered.push(seats[i]);
    }
    for (let i = 0; i <= btnSeatId; ++i) {
        reordered.push(seats[i]);
    }

    return reordered;
};

const firstRaiserBefore = (seats, bb, index) => {
    if (index > 1) {
        for (let i = 2; i < index; ++i) {
            const seat = seats[i];
            if (seat.pot > bb) {
                return i;
            }
        }
        return -1;
    } else {
        const firstNonBlindRaiser = firstRaiserBefore(seats, bb, seats.length);
        if (firstNonBlindRaiser) {
            return firstNonBlindRaiser
        } else if (index === 0) {
            return -1;
        } else {
            return seats[0].pot > bb ? 0 : -1;
        }
    }
};

const generateTip = (game, bb, seats, community) => {
    const tip = { players: {} };

    if (game.type === Games.TexasHoldem && game.bet === Bets.NoLimit) {
        seats = reorderBtnLast(seats);

        const players = seats.length;
        const index = seats.findIndex(seat => seat.isMe);

        if (index !== -1) {
            const mySeat = seats[index];
            const myHand = mySeat.cards;
            if (myHand.length === 0) {
                throw {
                    type: 'https://www.openhud.io/errors/invalid-data',
                    detail: 'Hero cards are missing'
                };
            }
            const myHandRep = represent({ hand: myHand });

            const raiserPosition = firstRaiserBefore(seats, bb, index);
            if (raiserPosition === -1) {
                const firstInAction = getFirstInAction(players, index, myHandRep);
                if (firstInAction) {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${firstInAction} if first in.`;
                }
            } else {
                const raiseAction = getRaiseAction(players, index, raiserPosition, myHandRep);
                if (raiseAction) {
                    tip.players[mySeat.playerName] = `${myHandRep} should ${raiseAction} when raised like this.`;
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