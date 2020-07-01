class Storage {

    constructor (localStorage,startData) {
        this.storage = localStorage;
        this.length = this.storage.length;
        this.insertNewPost = this.insertNewPost.bind(this);
        this.getId = this.getId.bind(this);
        this.removePost = this.removePost.bind(this);

        if (this.length !== 0) {
            this.data = JSON.parse(this.storage.data);
        }

        else {
            this.idCounter = 0;
            this.data = [];
            this.getStartdata(startData);
        }

    }

    insertNewPost(number, post) {
        this.data.splice(number, 0, post);
        this._refresh();
    }


    removePost(number) {
        this.data.splice(number-1, 1);
        this._refresh();
    }

    getId() {
        this.idCounter = this.data.reduce(function(sum, current) {
            if (current.id>sum) {return current.id}
            return sum;
          }, 0);
        return this.idCounter+1
    }

    getStartdata(startData) {
        startData.forEach(item => {
          item.id = this.idCounter;
          this.idCounter = this.idCounter+1;
          this.data.push(item); 
        });
    this._refresh();
    }

    _refresh() {
        this.storage.clear();
        this.storage.data = JSON.stringify(this.data);
    }

    updateElmentById(id,newValue){
        const result = this.data.findIndex(item => {
            return item.id == id;
          });

        if (this.data[result].hasOwnProperty('textValue')) {this.data[result].textValue=newValue;}
        if (this.data[result].hasOwnProperty('link')) {this.data[result].link=newValue;}

        this._refresh();
    }

}