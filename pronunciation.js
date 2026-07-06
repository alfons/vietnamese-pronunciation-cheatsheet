const PATH_AUDIO = "./audiosamples/";
var currentAudio = null; // Track the currently playing audio element

function createTableFromCSV(csvData) {
    var lines = csvData.split('\n');
    var tableBody = document.querySelector('#csvTable tbody');

    for (var i = 0; i < lines.length; i++) {
        var line = lines[i].split('\t');
        var row = document.createElement('tr');

        var lettersCell = document.createElement('td');
        lettersCell.textContent = line[0];
        lettersCell.classList.add('letters');
        row.appendChild(lettersCell);

        var examplesCell = document.createElement('td');
        examplesCell.classList.add('examples');

        var examplesSpan1 = document.createElement('span');
        examplesSpan1.textContent = line[1];
        examplesSpan1.classList.add('example');

        var examplesSpan2 = document.createElement('span');
        examplesSpan2.textContent = line[2];
        examplesSpan2.classList.add('translation');

        examplesCell.appendChild(examplesSpan1);
        examplesCell.appendChild(examplesSpan2);
        row.appendChild(examplesCell);


        var audioCell = document.createElement('td');
        var audioFiles = (line[3] || "")
            .split(",")
            .map(file => file.trim())
            .filter(Boolean);
        for (var j = 0; j < audioFiles.length; j++) {
            var audioFile = audioFiles[j];
            var audioButton = document.createElement('button');
            var audioButtonLabel = getAudioButtonLabel(audioFile);

            audioButton.textContent = audioButtonLabel;
            audioButton.addEventListener('click', playAudio.bind(null, audioFile));

            audioCell.appendChild(audioButton);
            audioCell.appendChild(document.createElement('br'));
        }
        row.appendChild(audioCell);

        tableBody.appendChild(row);
    }
}

function getAudioButtonLabel(audioFile) {
    if (audioFile.includes('banmai')) {
        return 'Ban Mai (Bắc)';
    } else if (audioFile.includes('thuminh')) {
        return 'Thu Minh (Bắc)';
    } else if (audioFile.includes('linhsan')) {
        return 'Linh San (Nam)';
    } else {
        return 'Play Audio';
    }
}


function playAudio(audioFile) {
    if (currentAudio) {
        currentAudio.pause(); // Pause the currently playing audio
    }

    var audio = new Audio(PATH_AUDIO + audioFile);
    audio.play();

    currentAudio = audio; // Update the currently playing audio
}

function speakText(text) {
    var speech = new SpeechSynthesisUtterance();
    speech.text = text;

    var voices = speechSynthesis.getVoices();
    speech.lang = 'vi-VN';

    speech.voice = voices.find(function (voice) {
        return voice.lang === 'vi-VN';
    });
    speechSynthesis.speak(speech);
}

document.addEventListener('mouseup', function (event) {
    var selection = window.getSelection();
    var target = event.target;

    // Check if the selection is not empty, the target is not a button, and the event is not on the window itself
    if (selection.toString() && target.tagName !== 'BUTTON' && target !== window) {
        // Check if the "s" key is pressed
        document.addEventListener('keydown', function (event) {
            if (event.key === 's') {
                speakText(selection.toString());
            }
        });
    }
});


function isButtonClicked(element) {
    // Check if the element is a button or if it is a child of a button
    if (element.tagName === 'BUTTON' || element.closest('button')) {
        return true;
    }
    return false;
}

createTableFromCSV(csvData);
