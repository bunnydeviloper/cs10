$(function(){

    var model = {
        init: function() {
            if (!localStorage.notes) {
                localStorage.notes = JSON.stringify([]);
            }
        },
        add: function(obj) {
            var data = JSON.parse(localStorage.notes);
            data.push(obj);
            localStorage.notes = JSON.stringify(data);
        },
        getAllNotes: function() {
            return JSON.parse(localStorage.notes);
        }
    };


    var octopus = {
        addNewNote: function(noteStr) {
            model.add({
                content: noteStr,
                dateSubmitted: Date.now()
            });
            view.render();
        },

        getNotes: function() {
            // add reverse method to get all the notes in reverse order
            return model.getAllNotes().reverse();
            // side note: run 'localStorage.clear()' in the dev tool to reset all data
        },

        init: function() {
            model.init();
            view.init();
        }
    };


    var view = {
        init: function() {
            this.noteList = $('#notes');
            var newNoteForm = $('#new-note-form');
            var newNoteContent = $('#new-note-content');
            newNoteForm.submit(function(e){
                octopus.addNewNote(newNoteContent.val());
                newNoteContent.val('');
                e.preventDefault();
            });
            view.render();
        },
        render: function(){
            var htmlStr = '';
            octopus.getNotes().forEach(function(note){
              /* my solution
                htmlStr += '<li class="note">'+
                        note.content + '<span class="note-date">' + note.dateSubmitted + '</span>' +
                    '</li>';
                    */
              // Course solution:
                htmlStr += '<li class="note">'+
                        '<span class="note-date">' + new Date(note.dateSubmitted).toString() + '</span> ' +
                        note.content +
                    '</li>';
            });
            this.noteList.html( htmlStr );
        }
    };

    octopus.init();
});
