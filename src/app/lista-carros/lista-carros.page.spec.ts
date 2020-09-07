import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaCarrosPage } from './lista-carros.page';

describe('ListaCarrosPage', () => {
  let component: ListaCarrosPage;
  let fixture: ComponentFixture<ListaCarrosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaCarrosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaCarrosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
