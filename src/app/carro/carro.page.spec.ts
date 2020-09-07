import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CarroPage } from './carro.page';

describe('CarroPage', () => {
  let component: CarroPage;
  let fixture: ComponentFixture<CarroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarroPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CarroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
