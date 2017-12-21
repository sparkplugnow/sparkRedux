import { combineReducers } from 'redux';

const reducing = ()=>{
    return  [{
        id: 1,
        home: 'Arsenal FC',
        away: 'Leicester City',
        date: 'Friday, 10th August 2017',
        time: '2:45PM EST',
        venue: 'Emirates Stadium',
        homeTeamUrl: 'http://southpawgroup.com/clubs/arsenal.png',
        awayTeamUrl: 'http://southpawgroup.com/clubs/leicester.png',
        outcomeChoice: null
    },
    {
        id: 2,
        home: 'Watford FC',
        away: 'Liverpool FC',
        date: 'Saturday, 11th August 2017',
        time: '7:30PM EST',
        venue: 'Vicarage Road',
        homeTeamUrl: 'http://southpawgroup.com/clubs/watford.png',
        awayTeamUrl: 'http://southpawgroup.com/clubs/liverpool.png',
        outcomeChoice: null
    }]
    }
   
    const userClicked = (state= {},action)=>{
        switch(action.type){
            case 'INC':
            return action.payload.name;
            case 'DEC':
            return action.payload.name;
            default:
            return state;
        }
    }
    
   
    const reducer = combineReducers({
        user: reducing,
        clicked:userClicked
    });
    export default reducer;
