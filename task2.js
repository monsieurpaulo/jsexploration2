let data = [
    { principal : 2500, time : 1.8 },
    { principal : 1000, time : 5 },
    { principal : 3000, time : 1 },
    { principal : 2000, time : 3 },
    
    ];

const interestCalculator = arr => {
    arr.forEach(e1 => {
        let rate;
        if (e1.principal >= 2500 && e1.time > 1 && e1.time < 3){
            rate = 3;
        }
        else if (e1.principal >= 2500 && e1.time >= 3){
            rate = 4;
        }
        else if (e1.principal < 2500 || e1.time <= 1){
            rate = 2;
        }
        else {
            rate = 1;
        }
        let interest = (e1.principal * e1.time * rate) / 100;

        let interestData = [
            {
                principal: e1.principal,
                rate: rate,
                time: e1.time,
                interest: interest
            }
        ];

        console.log(interestData);

        return interestData;
    });
};

interestCalculator(data);
