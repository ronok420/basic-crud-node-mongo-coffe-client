import React from 'react';
import Swal from 'sweetalert2'

const AddCoffe = () => {
    const handleCoffe = (event) => {
        event.preventDefault();
        // const form = event.target;  // Fix the typo here
        // const name = form.name.value;
        // const quantity = form.quantity.value;
        // const supplier = form.supplier.value;
        // const taste = form.taste.value;
        // const category = form.catefory.value;
        // const details = form.details.value;
        // const photoUrl = form.url.value;

        // const name = form.querySelector('[name="name"]').value;
        // const quantity = form.querySelector('[name="quantity"]').value;
        // const supplier = form.querySelector('[name="supplier"]').value;
        // const taste = form.querySelector('[name="taste"]').value;
        // const category = form.querySelector('[name="category"]').value;
        // const details = form.querySelector('[name="details"]').value;
        // const photoUrl = form.querySelector('[name="url"]').value;
        // const newCoffe = {
        //     name, quantity, supplier, taste, category, details, photoUrl
        // }
        const form = event.target;
        const formData = new FormData(form);

        const newCoffe = {
            name: formData.get('name'),
            quantity: formData.get('quantity'),
            supplier: formData.get('supplier'),
            taste: formData.get('taste'),
            category: formData.get('category'),
            details: formData.get('details'),
            photoUrl: formData.get('url'),
        };


        console.log(newCoffe);
        // form.reset();

        fetch('http://localhost:7000/coffe', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(newCoffe)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.success) {
                    Swal.fire({
                        title: 'success',
                        text: 'User added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div className='bg-[#F4F3F0] p-24'>

            <h2 className='text-xl font-extrabold'>Add a coffe</h2>
            <form onSubmit={handleCoffe} action="">

                <div>

                    {/* coffe row for name */}
                    <div className='md:flex '>

                        <label className="form-control md:w-1/2 m-2 ">
                            <div className="label">
                                <span className="label-text">Coffe name?</span>

                            </div>
                            <input type="text" placeholder="Enter coffe name" name='name' className="input input-bordered w-full text-sm  h-8 bg-white" />

                        </label>
                        <label className="form-control md:w-1/2 m-2">
                            <div className="label">
                                <span className="label-text">Available quantity</span>

                            </div>
                            <input type="text" placeholder="Enter quantity" name='quantity' className="input input-bordered w-full text-sm  h-8 bg-white" />

                        </label>

                    </div>
                    {/* coffe row for supplier */}
                    <div className='md:flex '>

                        <label className="form-control md:w-1/2 m-2 ">
                            <div className="label">
                                <span className="label-text">Supplier</span>

                            </div>
                            <input type="text" placeholder="Enter coffe supplier" name='supplier' className="input input-bordered w-full text-sm  h-8 bg-white" />

                        </label>
                        <label className="form-control md:w-1/2 m-2">
                            <div className="label">
                                <span className="label-text">Taste</span>

                            </div>
                            <input type="text" placeholder="Enter coffe taste" name='taste' className="input input-bordered w-full text-sm  h-8 bg-white" />

                        </label>

                    </div>
                    {/* coffe row for category */}
                    <div className='md:flex '>

                        <label className="form-control md:w-1/2 m-2 ">
                            <div className="label">
                                <span className="label-text">Coffe category</span>

                            </div>
                            <input type="text" placeholder="Enter coffe category" name='category' className="input input-bordered w-full text-sm  h-8 bg-white" />

                        </label>
                        <label className="form-control md:w-1/2 m-2">
                            <div className="label">
                                <span className="label-text">Coffe details</span>

                            </div>
                            <input type="text" placeholder="Enter details" name='details' className="input input-bordered w-full text-sm  h-8 bg-white" />

                        </label>

                    </div>
                    {/* coffe row for photo */}
                    <div className='md:flex '>

                        <label className="form-control md:w-full m-2 ">
                            <div className="label">
                                <span className="label-text">Photo url</span>

                            </div>
                            <input type="text" placeholder="Enter photo url" name='url' className="input input-bordered w-full text-sm  h-8 bg-white" />

                        </label>


                    </div>





                </div>

                <div className='flex justify-center items-center'>
                    <input type="submit" value="submit" className="btn btn-wide h-4 sm:h-4 " />
                </div>



                {/* <button className="btn btn-neutral">Neutral</button> */}



            </form>

        </div>
    );
};

export default AddCoffe;