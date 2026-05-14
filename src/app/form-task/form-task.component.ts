import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators, ɵInternalFormsSharedModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
    selector: 'app-form-task',
    templateUrl: './form-task.component.html',
    styleUrls: ['./form-task.component.css'],
})
export class FormTaskComponent {

    productdata: FormGroup = new FormGroup({
        id: new FormControl(),
        title: new FormControl(),
        description: new FormControl(),
        category: new FormControl(),
        price: new FormControl(),
        discountPercentage: new FormControl(),
        rating: new FormControl(),
        stock: new FormControl(),
        brand: new FormControl(),
        sku: new FormControl(),
        weight: new FormControl(),
        dimensions: new FormGroup({
            width: new FormControl(),
            height: new FormControl(),
            depth: new FormControl(),
        }),
        shippinginfo: new FormControl(),
        warrantyinfo: new FormControl(),
        availabilitystatus: new FormControl(),
        reviews: new FormArray([]),
        tags: new FormArray([]),
        meta: new FormArray([]),
        image: new FormArray([]),
        thumbnail: new FormControl()
    })


    get tagFormArray() {
        return this.productdata.get('tags') as FormArray;
    }
    addFormArray() {
        this.tagFormArray.push(
            new FormGroup({
                tags: new FormControl()
            })
        )
    }
    deletetag(i: number) {
        this.tagFormArray.removeAt(i);
    }
    // creation of review form
    get reviewFormArray() {
        return this.productdata.get('reviews') as FormArray;
    }
    addFormreviewArray() {
        this.reviewFormArray.push(
            new FormGroup({
                rating: new FormControl(),
                comment: new FormControl(),
                date: new FormControl(),
                reviewername: new FormControl(),
                revieweremail: new FormControl(),
                returnpolicy: new FormControl(),
                MinimumOrderquantity: new FormControl(),
            })
        )
    }
    deletereview(i: number) {
        this.reviewFormArray.removeAt(i);
    }

    // meta creation
    get metaFormArray() {
        return this.productdata.get('meta') as FormArray;
    }
    addFormmetaArray() {
        this.metaFormArray.push(
            new FormGroup({
                createdAt: new FormControl(),
                updatedAt: new FormControl(),
                barcode: new FormControl(),
                qrCode: new FormControl(),
            })
        )
    }
    deletemeta(i: number) {
        this.metaFormArray.removeAt(i);
    }

    // image creation
    get imageFormArray() {
        return this.productdata.get('image') as FormArray;
    }
    addimageFormArray() {
        this.imageFormArray.push(
            new FormGroup({
                image: new FormControl()
            })
        )
    }
    deleteimage(i: number) {
        this.imageFormArray.removeAt(i);
    }

    submit() {
        console.log(this.productdata);
    }


}


