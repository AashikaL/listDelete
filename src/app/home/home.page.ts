import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { AlertController, AnimationController, DomController, GestureController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterViewInit  {
  @ViewChildren('container', { read: ElementRef }) itemContainer!: QueryList<ElementRef>;
  myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  constructor(private gestureCtrl: GestureController, private animationCtrl: AnimationController, private domCtrl: DomController, private toastCtrl: ToastController) { }

  ngAfterViewInit() {
    const windowWidth = window.innerWidth;
    const containerArray = this.itemContainer.toArray();

    for (let i = 0; i < containerArray.length; i++) {
      const containerElement = containerArray[i].nativeElement;

      // We know the ion-item is the first child of teachhe container element
      const itemElement = containerElement.childNodes[0];

      const deleteAnimation = this.animationCtrl.create()
        .addElement(containerElement)
        .duration(200)
        .easing('ease-out')
        .fromTo('height', '48px', '0');

      const swipeGesture = this.gestureCtrl.create({
        el: itemElement,
        threshold: 15,
        direction: 'x',
        gestureName: 'swipe-delete',
        onMove: ev => {
          const currentX = ev.deltaX;

          this.domCtrl.write(() => {
            // Make sure the item is above the other elements
            itemElement.style.zIndex = 2;
            // Reposition the item
            itemElement.style.transform = `translateX(${currentX}px)`;
          });
        },
        onEnd: ev => {
          itemElement.style.transition = '0.2s ease-out';

          // Fly out the element if we cross the threshold of 150px
          if (ev.deltaX < -150) {
            this.domCtrl.write(() => {
              itemElement.style.transform = `translate3d(-${windowWidth}px, 0, 0)`;
            });
            deleteAnimation.play();

            deleteAnimation.onFinish(async () => {
              this.myArray = this.myArray.filter(number => number != i + 1);

              const toast = await this.toastCtrl.create({
                message: `Item ${i + 1} removed.`,
                duration: 2000,
                buttons: [
                  {
                    text: 'Undo',
                    role: 'cancel',
                    },
                ],
              });
              toast.present();
            });
          } else {
            // Fly the item back into the original position
            this.domCtrl.write(() => {
              itemElement.style.transform = '';
            });
          }
        }
      }, true);

      // Don't forget to enable!
      swipeGesture.enable(true);
    }
  }

}
