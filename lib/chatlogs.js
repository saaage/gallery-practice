// chats is an array of objects. each object is a conversation that belongs to a specific image

let chats;

module.exports = {

  chats: [],

  // returnComments should return each comment inside of a conversation on a new line
  returnComments: function(index) {

    let exportArray = [];

    for (ctr=0; ctr < this.chats[index].comments.length; ctr++){
       exportArray.push(this.chats[index].comments[ctr]);
    }

    // reutrn array values, inserting 2 breaks between each one
    return exportArray.join('<br/><br/>');

  }
}
