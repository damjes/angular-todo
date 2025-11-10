import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementZadanie } from './element-zadanie';

describe('ElementZadanie', () => {
	let component: ElementZadanie;
	let fixture: ComponentFixture<ElementZadanie>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ElementZadanie],
		}).compileComponents();

		fixture = TestBed.createComponent(ElementZadanie);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
