setScreen("Login");

var nameEntered = "False";
onEvent("newClick", "click", function( ) {
  playSound("sound://category_app/perfect_app_button_1.mp3", false);
  setScreen("Signup");
});
onEvent("oldClick", "click", function( ) {
  playSound("sound://category_app/perfect_app_button_1.mp3", false);
  setScreen("Login");
});
onEvent("signupButton", "click", function( ) {
  playSound("sound://category_app/app_interface_button_4.mp3", false);
  var emailSaved = getProperty("signInputEmail", "value");
  var passwordSaved = getProperty("signInputPassword", "value");
  setKeyValue(emailSaved, passwordSaved, function () {
    setScreen("Login");
  });
});
onEvent("loginButton", "click", function( ) {
  playSound("sound://category_app/app_interface_button_4.mp3", false);
  var email = getProperty("inputEmail", "value");
  var password = getProperty("inputPassword", "value");
  getKeyValue(email, function (value) {
    if (value == password) {
      setScreen("Home");
      hideElement("welcomemess");
      hideElement("speaker");
      showElement("proceed");
      showElement("nameInput");
      onEvent("proceed", "click", function( ) {
        playSound("sound://category_app/perfect_app_button_1.mp3", false);
        var awsScore = 0;
        var codeScore = 0;
        var cbseScore = 0;
        var aimScore = 0;
        var name = getProperty("nameInput", "value");
        if (name.length > 0) {
          var nameEntered = "true";
          hideElement("proceed");
          hideElement("nameInput");
          showElement("speaker");
          setText("welcomemess", "Hello " + name + "! Explore what your Saathi has to offer by clicking the icons below! Happy Learning!");
          showElement("welcomemess");
          onEvent("speaker", "click", function( ) {
            playSpeech("Hello " + name + "! Explore what your Saathi has to offer by clicking the icons below! Happy Learning!", "female", "English");
          });
        } else {
          write("Please enter your name...");
        }
        if (nameEntered=="False") {
          onEvent("learningButton", "click", function( ) {
            playSound("sound://category_app/modern_ui_sound.mp3", false);
            write("Enter your name first...");
          });
          onEvent("practiceButton", "click", function( ) {
            playSound("sound://category_app/modern_ui_sound.mp3", false);
            write("Enter your name first...");
          });
          onEvent("progressButton", "click", function( ) {
            playSound("sound://category_app/modern_ui_sound.mp3", false);
            write("Enter your name first...");
          });
          onEvent("contactButton", "click", function( ) {
            playSound("sound://category_app/modern_ui_sound.mp3", false);
            write("Enter your name first...");
          });
          onEvent("image11", "click", function( ) {
            playSound("sound://category_app/modern_ui_sound.mp3", false);
            write("Enter your name first...");
          });
        }
        if (nameEntered == "true") {
          onEvent("homeButton1", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("homeButton2", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("homeButton3", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("homeButton4", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("image7", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("image8", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("image9", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("image10", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("button1", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            var aws1 = getProperty("dropdown1", "value");
            var aws2 = getProperty("dropdown2", "value");
            var aws3 = getProperty("dropdown3", "value");
            var aws4 = getProperty("dropdown4", "value");
            if (aws1 == "Amazon Web Services") {
              awsScore += 1;
            }
            if (aws2 == "Using IT resources via internet") {
              awsScore += 1;
            }
            if (aws3 == "Yes") {
              awsScore += 1;
            }
            if (aws4 == "A machine learning service") {
              awsScore += 1;
            }
            write("Your score is: "+awsScore);
          });
          onEvent("button6", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            var code1 = getProperty("dropdown5", "value");
            var code2 = getProperty("dropdown6", "value");
            var code3 = getProperty("dropdown7", "value");
            var code4 = getProperty("dropdown8", "value");
            if (code1 == "Movie Lab") {
              codeScore += 1;
            }
            if (code2 == "Yes") {
              codeScore += 1;
            }
            if (code3 == "Sprite") {
              codeScore += 1;
            }
            if (code4 == "No limit") {
              codeScore += 1;
            }
            write("Your score is: "+codeScore);
          });
          onEvent("button7", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            var cbse1 = getProperty("dropdown9", "value");
            var cbse2 = getProperty("dropdown10", "value");
            var cbse3 = getProperty("dropdown11", "value");
            var cbse4 = getProperty("dropdown12", "value");
            if (cbse1 == "Operating System") {
              cbseScore += 1;
            }
            if (cbse2 == "Speaker") {
              cbseScore += 1;
            }
            if (cbse3 == "John McCarthy") {
              cbseScore += 1;
            }
            if (cbse4 == "Binary") {
              cbseScore += 1;
            }
            write("Your score is: "+cbseScore); 
          });
          onEvent("button8", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            var aim1 = getProperty("dropdown13", "value");
            var aim2 = getProperty("dropdown14", "value");
            var aim3 = getProperty("dropdown15", "value");
            var aim4 = getProperty("dropdown16", "value");
            if (aim1 == "Atal Innovation Mission") {
              aimScore += 1;
            }
            if (aim2 == "Dr. Chintan Vaishnav") {
              aimScore += 1;
            }
            if (aim3 == "Atal Tinkering Lab") {
              aimScore += 1;
            }
            if (aim4 == "A microcontroller") {
              aimScore += 1;
            }
            write("Your score is: "+aimScore); 
          });
          onEvent("homebuttonChat", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("Home");
          });
          onEvent("learningButton", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("eLearning");
          });
          onEvent("practiceButton", "click", function( ) {
            playSound("sound://category_app/app_menu_button.mp3", false);
            setScreen("practice");
          });
          onEvent("progressButton", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            setScreen("progress");
            var average = (awsScore+codeScore+cbseScore+aimScore)/4;
            setText("label44", "Average Score:"+average);
            drawChart("chart1", "bar", [
            	({ label: "AWS", score: awsScore }),
            	({ label: "CODE", score: codeScore }),
            	({ label: "CBSE", score: cbseScore }),
            	({ label: "AIM", score: aimScore }),
            	]);
            if (average==4) {
              setText("text_area10", "You flawlessly answered all the questions! Excellent Work!!!");
            } else if ((average>=3&&average<4)) {
              setText("text_area10", "Well done! Just a little more effort and you can get all of them right!");
            } else if ((average>=2&&average<3)) {
              setText("text_area10", "Nice Try! Almost there... please go through the E-Learning section again!");
            } else if ((average>=1&&average<2)) {
              setText("text_area10", "You'll have to work harder! Please go through the E-Learning section again!");
            } else if (average>0&&average<1) {
              setText("text_area10", "You had almost all wrong! Please go through the E-Learning section again!");
            } else {
              setText("text_area10", "Please attempt the Quiz in practice section to view your progress!");
            }
          });
          onEvent("contactButton", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            setScreen("contact");
          });
          onEvent("image11", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            setScreen("chatbot");
            setText("answer", "Say hi to the chatbot or ask for it's name! You can also ask about how to use this app. You can ask for help as well if you need any! :)");
          });
          onEvent("askButton", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            var questionAsked = getProperty("question", "value");
            questionAsked = questionAsked.toLowerCase();
            setProperty("question", "text", "");
            if (questionAsked.includes("name")) {
              setText("answer", "My name is Addy! I'm named after my creator Aditya.");
            } else if ((questionAsked.includes("hi"))) {
              setText("answer", "Hi there! I am a chatbot! You can call me your Student Saathi");
            } else if ((questionAsked.includes("hello"))) {
              setText("answer", "Hi there! I am a chatbot! You can call me your Student Saathi");
            } else if ((questionAsked.includes("help"))) {
              setText("answer", 	"If you need any help, you can contact your teacher from the contact section or if you want to contact a counsellor and need someone to guide you please contact on one of these numbers: Arpita Foundation +91 80 23655557, Vandrevala Foundation 9999 666 555");
            } else if ((questionAsked.includes("how to"))) {
              setText("answer", "Go to home page by clicking the home icon and you'll see various images, you can click them to learn, practice questions, see your progress or contact your teacher!");
            } else {
              setText("answer", "Sorry! I don't know that!");
            }
          });
          onEvent("speakerChat", "click", function( ) {
            playSpeech(getText("answer"), "male", "English");
          });
          onEvent("problemButton", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            var problemAsked = getProperty("text_input1", "value");
            createRecord("problems", {problem:problemAsked, name:name}, function(record) {
              write("Your query has reached your teacher!");
              setProperty("text_input1", "text", "");
            });
          });
          onEvent("image14", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            open("https://www.awsybc2021.in/Enablement.html");
          });
          onEvent("image15", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            open("https://code.org/learn");
          });
          onEvent("image16", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            open("http://cbseacademic.nic.in/ai.html");
          });
          onEvent("image17", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            open("https://aim.gov.in/resources.php");
          });
          onEvent("button2", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            setScreen("awsQuiz");
          });
          onEvent("button3", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            setScreen("codeQuiz");
          });
          onEvent("button4", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            setScreen("cbseQuiz");
          });
          onEvent("button5", "click", function( ) {
            playSound("sound://category_app/perfect_app_button_1.mp3", false);
            setScreen("aimQuiz");
          });
        }
      });
    } else {
      write("WRONG CREDENTIALS");
    }
  });
});
