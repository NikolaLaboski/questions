//using selectors inside the element
/*
const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  });
});
*/

/*
    First we use querySelectorAll to select all elements with the class
    of question and we store them in a variable (NodeList) named questions.
    A NodeList is a collection of nodes returned by various DOM methods
    such as querySelectorAll(). It is not an array but rather a list of
    nodes that can be iterated over usually using methods like forEach
    Next we use forEach to iterate over each question element, calling 
    a callback function. This is the outer loop.
    In the callback function we use query selector to select the button
    with the class of question-btn, for each question. 
    Then we add an event listener to each button, triggering a callback
    function, so within each click event there's an inner loop that
    iterates over all questions. It ensures that for each click, 
    all questions (except the clicked one) have their answer hidden.
    In the callback function for each inner loop iteration (each "item")
    it checks if the current question-item being iterated is not the same 
    as the one that was clicked, so, the item parameter represents the
    each question element in the inner loop as it iterates over all 
    questions, and the variable question represents the question that
    was clicked in the outer loop. And if item is not equal to question
    it means the current question being iterated(item) is not the one
    that was clicked, it is different. So the purpose of this was to 
    ensure that the action (item.classList.remove("show-text")) is 
    applied only to questions other than the one that was clicked, 
    since We want to hide the answers for all other questions when a
    question is clicked, but we don't want to hide the answer 
    of the clicked question because it's the one the user wants to see.
    After the inner loop completes, the class "show-text" is toggled 
    on the clicked question, making its answer visible if it was hidden, 
    or hiding it if it was visible.
*/

// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const question = e.currentTarget.parentElement.parentElement;
    question.classList.toggle("show-text");
  });
});
