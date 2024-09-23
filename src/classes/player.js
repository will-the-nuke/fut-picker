//main class for a football player
import{ref, getStorage, getDownloadURL} from 'firebase/storage'; 

class Player{
    constructor(pace, shooting, passing, dribbling, defence, physical, overallRating, position, name, nationality, league, club, cardType,){
        this.pace = pace;
        this.shooting = shooting;
        this.passing = passing;
        this.dribbling = dribbling;
        this.defence = defence;
        this.physical = physical;
        this.overallRating = overallRating;
        this.position = position;
        this.name = name;
        this.nationality = nationality;
        this.league = league;
        this.club = club;
        this. cardType = cardType;
    };

    getLeagueImage(){
        const storage = getStorage();
        getDownloadURL(ref(storage, `leagueImages/${this.league}.png`)).then((url) => {
            return url;
        });
    };

    getPlayerImage(){
        const storage = getStorage();
        getDownloadURL(ref(storage, `playerImages/${this.name}.png`)).then((url) => {
            return url;
        });
    };

    getClubImage(){
        const storage = getStorage();
        getDownloadURL(ref(storage, `clubImages/${this.club}.png`)).then((url) => {
            return url;
        });
    };

    getFlagImage(){
        const storage = getStorage();
        getDownloadURL(ref(storage, `flagImages/${this.nationality}.png`)).then((url) => {
            return url;
        });
    };

    getCardBackgroundImage(){
        const storage = getStorage();
        getDownloadURL(ref(storage, `cardBackgroundImages/${this.cardType}.png`)).then((url) => {
            return url;
        });
    };
};

export default Player;