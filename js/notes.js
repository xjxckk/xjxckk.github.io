var Notes = document.getElementsByClassName("Note")

function storeUsernote(id) {
	  var note = Notes[0].innerHTML;
	  localStorage.setItem("usernote",note);
	}

	function getUsernote() {
	  if ( localStorage.getItem("usernote")) {
		var note = localStorage.getItem("usernote");
	  }
	  else {
		var note = "<b>To Do:</b>\nTo Do";
		  }
	  Notes[0].innerHTML = note;
	}

function storeUsernote1(id) {
      var note = Notes[1].innerHTML;
      localStorage.setItem("usernote1",note);
    }

    function getUsernote1() {
      if ( localStorage.getItem("usernote1")) {
        var note = localStorage.getItem("usernote1");
      }
      else {
        var note = "<b>1:</b>\n1";
          }
      Notes[1].innerHTML = note;
    }

function storeUsernote2(id) {
      var note = Notes[2].innerHTML;
      localStorage.setItem("usernote2",note);
    }

    function getUsernote2() {
      if ( localStorage.getItem("usernote2")) {
        var note = localStorage.getItem("usernote2");
      }
      else {
        var note = "<b>2:</b>\n2";
          }
      Notes[2].innerHTML = note;
    }