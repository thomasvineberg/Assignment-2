var marcoPolo = 0;

while (marcoPolo < 100) {
        marcoPolo += 1;
        if ((marcoPolo % 3 !== 0) && (marcoPolo % 5 !== 0)) {
            window.document.write(marcoPolo + "<br>");
        }
          else if ((marcoPolo % 3 == 0) && (marcoPolo % 5 == 0)) {
            window.document.write("Marco Polo!" + "<br>");
        } else if (marcoPolo % 3 == 0) {
            window.document.write("Marco!" + "<br>");
        } else if (marcoPolo % 5 == 0) {
            window.document.write("Polo!" + "<br>");
            }
        }
        
    
