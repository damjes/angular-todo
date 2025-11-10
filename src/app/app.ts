import { Component, signal } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Zadanie } from '../typy/zadanie'
import { ElementZadanie } from './element-zadanie/element-zadanie'

@Component({
	selector: 'app-root',
	imports: [ElementZadanie],
	templateUrl: './app.html',
	styleUrl: './app.sass',
})
export class App {
	protected readonly title = signal('angular-todo')

	generujZadanie(nazwa: string, ukonczone?: boolean): Zadanie {
		return {
			id: crypto.randomUUID(),
			nazwa,
			ukonczone: ukonczone ?? false,
		}
	}

	oznaczJakoUkonczone(idZadania: string) {
		this.zadania = this.zadania.map(zadanie =>
			zadanie.id === idZadania ? { ...zadanie, ukonczone: !zadanie.ukonczone } : zadanie
		)
	}

	zadania: Zadanie[] = [
		this.generujZadanie('Napisz kod'),
		this.generujZadanie('Przetestuj aplikację'),
		this.generujZadanie('Zrób code review', true),
	]
}
