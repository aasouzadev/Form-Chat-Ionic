import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
})
export class FolderPage {
  questions: string[] = [
    'Qual é o seu nome?',
    'Qual é o seu email?',
    'Crie uma senha',
    'Confirme sua senha',
    'Qual é a sua idade?',
  ];

  chatHistory: { question: string; answer: string }[] = [];

  currentQuestionIndex: number = 0;
  currentAnswer: string = '';
  completed: boolean = false;

  constructor() {}

  nextQuestion() {
    if (this.currentAnswer.trim()) {
      this.chatHistory.push({
        question: this.questions[this.currentQuestionIndex],
        answer: this.currentAnswer,
      });

      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
        this.currentAnswer = '';
      } else {
        this.completed = true;
      }
    }
  }
}
