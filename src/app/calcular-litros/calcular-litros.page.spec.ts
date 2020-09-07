import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalcularLitrosPage } from './calcular-litros.page';

describe('CalcularLitrosPage', () => {
  let component: CalcularLitrosPage;
  let fixture: ComponentFixture<CalcularLitrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcularLitrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalcularLitrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
