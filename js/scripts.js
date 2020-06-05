$(document).ready(function () {
  $('form#language-survey').submit(function (event) {
    event.preventDefault();
    const answers = [
      $('#question1').val(),
      $('#question2').val(),
      $('#question3').val(),
      $('#question4').val(),
      $('#question5').val(),
    ];
    const name = $('#name').val();

    if (answers.indexOf(null) === -1 && name) {
      $(':submit').prop('disabled', true);
      $(':submit').addClass('disabled');
      $('#userResults').replaceWith(`<h4>${name}, the language you should learn is...</h4>`)
      const result = calculateResults(answers);
      if (result.idSelector) {
        $(`#${result.idSelector}`)
          .append(`<p>${result.pTagText}</p>`)
          .removeClass('hide');
      } else $(`#${result}`).removeClass('hide');
    } else {
      alert('Oops, you forgot to answer a question!')
    }
  });

  $(':reset').click(function () {
    $(':submit').prop('disabled', false);
    $(':submit').removeClass('disabled');
    $('#ruby, #javascript, #csharp, #python').addClass('hide')
    $('#csharp p').remove();
  });
});

function calculateResults(answerArray) {
  let aCount = 0;
  let bCount = 0;
  let cCount = 0;
  let dCount = 0;

  answerArray.forEach((answer) => {
    switch (answer) {
      case 'a':
        aCount += 1;
        break;
      case 'b':
        bCount += 1;
        break;
      case 'c':
        cCount += 1;
        break;
      case 'd':
        dCount += 1;
        break;
    }
  });

  if (aCount > bCount && aCount > cCount && aCount > dCount) {
    return 'ruby';
  } else if (bCount > aCount && bCount > cCount && bCount > dCount) {
    return 'javascript';
  } else if (cCount > aCount && cCount > bCount && cCount > dCount) {
    return 'csharp';
  } else if (dCount > aCount && dCount > bCount && dCount > cCount) {
    return 'python';
  } else
    return {
      idSelector: 'csharp',
      pTagText:
        "Your answers suggest you want to learn two languages! Since you're indecisive, I suggest you learn a strongly typed language!",
    };
}
