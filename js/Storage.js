class Storage {

    constructor (localStorage,startData) {
        this.storage = localStorage;
        this.length = this.storage.length;

        if (this.length !== 0) {
            this.data = JSON.parse(this.storage.data);
        }

        else {
            this.idCounter = 0;
            this.data = [];
            this.getStartdata(startData);
        }

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
        console.log(id);
        console.log(this.data)
        const result = this.data.findIndex(item => {
            return item.id == id;
          });
        console.log(result);
        this.data[result].textValue=newValue;
        this._refresh();
    }

}