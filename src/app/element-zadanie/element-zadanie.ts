import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Zadanie } from '../../typy/zadanie'

@Component({
	selector: 'app-element-zadanie',
	imports: [],
	templateUrl: './element-zadanie.html',
	styleUrl: './element-zadanie.sass',
})
export class ElementZadanie {
	@Input() zadanie?: Zadanie = undefined
	@Output() oznaczoneJakoUkonczone = new EventEmitter<string>()

	ukoncz() {
		if (this.zadanie) {
			this.oznaczoneJakoUkonczone.emit(this.zadanie.id)
		}
	}
}
