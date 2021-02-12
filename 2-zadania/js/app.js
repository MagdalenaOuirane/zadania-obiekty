const spaceShip = {
    name: 'Enterprise',
    currentLocation: 'Earth',
    flyDistance: 0,

    flyTo(place, distance) {
        this.currentLocation = place;
        this.flyDistance += distance;
    },

    showInfo() {
        console.log(`Statek ${this.name} dolecial do miejsca ${this.currentLocation}. 
        Statek przelecial juz calkowity dystans ${this.flyDistance}`)
    },

    meetClingon() {

        let count = 0;
        for (let i = 0; i < 100, i++;) {

            if (Math.random() > 0.5) {
                count++
            }
        }

        if (count >= 50) {

            console.log(`Statek ${this.name} będący w okolicy ${this.currentLocation} zwycięsko wyszedł ze spotkania z Klingonami`);
        } else {

            console.log(`Statek ${this.name}  będący w okolicy  ${this.currentLocation} został pokonany przez Klingonów`);
        }
    }
}

spaceShip.flyTo( 'Venus', 500);
spaceShip.flyTo( 'Mars', 300);
spaceShip.showInfo();
spaceShip.meetClingon();

