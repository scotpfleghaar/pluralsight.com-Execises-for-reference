var mark = {
    name: "Mark",
    tshirtColor: "Navy Blue"

};

var lisa = {
    name: "lisa",
    tshirtColor: "Red"
};

function Friend(name, tshirtColor) {
    this.name = name;
    this.tshirtColor = tshirtColor;
}

var denny = new Friend("denny", "Green");
alert(denny);
