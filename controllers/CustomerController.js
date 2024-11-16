<!-- ------------ New Customer Model ------------ -->
            <div class="modal fade" id="newCustomerModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header bg-success text-white rounded-0">
                            <h5 class="modal-title">New Customer</h5>
                            <button type="button" id="close-savec-icon" class="btn-close"
                                data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="save-customer">
                                <div class="mb-1">
                                    <label for="txt-save-cid" class="form-label fw-bold">Customer ID :</label>
                                    <input type="text" id="txt-save-cid"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^C[0-9]{3,}$" />
                                    <div class="invalid-feedback error-bg">
                                        Customer ID is required [ Pattern : C00X ]
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-save-cname" class="form-label fw-bold">Customer Name :</label>
                                    <input type="text" id="txt-save-cname"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^([A-Z]\.[A-Z]\. )?[A-Z][a-z]*( [A-Z][a-z]*)*$" />
                                    <div class="invalid-feedback error-bg">
                                        Customer name is required and must follow the correct
                                        format
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-save-caddress" class="form-label fw-bold">Customer Address :</label>
                                    <textarea id="txt-save-caddress"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0" rows="3"
                                        pattern="^[A-Za-z0-9\s,./-]+(?:\s+[A-Za-z0-9\s,./-]+)*$"></textarea>
                                    <div class="invalid-feedback error-bg">
                                        Customer address is required and must follow the correct
                                        format
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-save-cno" class="form-label fw-bold">Customer Contact No :</label>
                                    <input type="text" id="txt-save-cno"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^[0-9]{10}$" />
                                    <div class="invalid-feedback error-bg">
                                        Enter a valid 10-digit contact number
                                    </div>
                                </div>

                                <div class="modal-footer button-set mt-4">
                                    <button type="submit" class="btn btn-info rounded-1 text-light">
                                        Save
                                    </button>
                                    <button type="button" id="close-savec-btn" class="btn btn-danger rounded-1"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ------------ Update Customer Model ------------ -->
            <div class="modal fade" id="updateCustomerModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header bg-success text-white rounded-0">
                            <h5 class="modal-title">Update Customer</h5>
                            <button type="button" id="close-updatec-icon" class="btn-close"
                                data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="update-customer">
                                <div class="mb-1">
                                    <label for="txt-update-cid" class="form-label fw-bold">Customer ID :</label>
                                    <input type="text" id="txt-update-cid"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^C[0-9]{3,}$" />
                                    <div class="invalid-feedback error-bg">
                                        Customer ID is [ Pattern : C00X ]
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-update-cname" class="form-label fw-bold">Customer Name :</label>
                                    <input type="text" id="txt-update-cname"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^([A-Z]\.[A-Z]\. )?[A-Z][a-z]*( [A-Z][a-z]*)*$" />
                                    <div class="invalid-feedback error-bg">
                                        Customer name is required and must follow the correct
                                        format
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-update-caddress" class="form-label fw-bold">Customer Address
                                        :</label>
                                    <textarea id="txt-update-caddress"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0" rows="3"
                                        pattern="^[A-Za-z0-9\s,./-]+(?:\s+[A-Za-z0-9\s,./-]+)*$"></textarea>
                                    <div class="invalid-feedback error-bg">
                                        Customer address is required and must follow the correct
                                        format
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-update-cno" class="form-label fw-bold">Customer Contact No :</label>
                                    <input type="text" id="txt-update-cno"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^[0-9]{10}$" />
                                    <div class="invalid-feedback error-bg">
                                        Enter a valid 10-digit contact number
                                    </div>
                                </div>

                                <div class="modal-footer button-set mt-4">
                                    <button type="submit" class="btn btn-info rounded-1 text-light">
                                        Update
                                    </button>
                                    <button type="button" id="close-updatec-btn" class="btn btn-danger rounded-1"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Orders Section -->
        <section id="tab-content-3" class="d-none">
            <div class="container">
                <div class="row label p-2 m-auto">
                    <div class="col-lg-12">
                        <h1 class="fw-medium text-start my-auto">
                            <i class="fa-solid fa-cart-shopping"></i>
                            Orders
                        </h1>
                    </div>
                </div>
                <div class="row content p-1 m-auto">
                    <div class="col-lg-12 px-0 py-3 px-lg-3">
                        <div class="row m-auto">
                            <div class="col-lg-5">
                                <h2 class="fw-normal fs-5 ps-3 p-2 m-0 w-100 bg-success text-light">
                                    Order Search / Invoice Details
                                </h2>
                                <div class="search bg-light p-3 position-relative order-search-box">
                                    <form id="search-order" class="px-2" action="search">
                                        <div class="d-flex mb-4 mt-3">
                                            <div class="w-100 d-flex flex-column">
                                                <input type="text"
                                                    class="form-control border-1 border-dark-subtle rounded-1"
                                                    placeholder="Input Order ID Here" pattern="^O[0-9]{3,}$" />
                                                <div class="invalid-feedback error-bg">
                                                    Order ID is required [ Pattern : O00X ]
                                                </div>
                                            </div>
                                            <div class="ms-2">
                                                <button type="submit" class="btn btn-success rounded-1">
                                                    Search
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                    <form id="invoice-details" class="px-2 mt-4">
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label for="txt-order-id" class="form-label fw-bold m-1">Order
                                                        ID:</label>
                                                    <input type="text" id="txt-order-id"
                                                        class="form-control border-1 border-dark-subtle rounded-1"
                                                        pattern="^O[0-9]{3,}$" />
                                                    <div class="invalid-feedback error-bg">
                                                        Enter a valid ID
                                                    </div>
                                                </div>
                                                <div class="col-lg-6">
                                                    <label for="txt-order-date"
                                                        class="form-label fw-bold m-1">Date:</label>
                                                    <input type="date" id="txt-order-date"
                                                        class="form-control border-1 border-dark-subtle rounded-1" />
                                                    <div class="invalid-feedback error-bg">
                                                        Enter a valid Date
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label for="select-customer-id"
                                                        class="form-label fw-bold m-1">Customer:</label>
                                                    <select id="select-customer-id"
                                                        class="form-select border-1 border-dark-subtle rounded-1">
                                                        <option value="">Select</option>
                                                    </select>
                                                </div>
                                                <div class="col-lg-6">
                                                    <label for="txt-customer-id" class="form-label fw-bold m-1">Customer
                                                        ID:</label>
                                                    <input id="txt-customer-id" type="text"
                                                        class="form-control border-1 border-dark-subtle rounded-1"
                                                        pattern="^C[0-9]{3,}$" />
                                                    <div class="invalid-feedback error-bg">
                                                        Enter a valid ID
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="row">
                                                <div class="col-lg-6">
                                                    <label for="txt-customer-name"
                                                        class="form-label fw-bold m-1">Name:</label>
                                                    <input id="txt-customer-name" type="text"
                                                        class="form-control border-1 border-dark-subtle rounded-1"
                                                        readonly />
                                                </div>
                                                <div class="col-lg-6">
                                                    <label for="txt-customer-cno" class="form-label fw-bold m-1">Contact
                                                        No:</label>
                                                    <input id="txt-customer-cno" type="text"
                                                        class="form-control border-1 border-dark-subtle rounded-1"
                                                        readonly />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group mb-5 pb-3">
                                            <label for="txt-customer-address"
                                                class="form-label fw-bold m-1">Address:</label>
                                            <input id="txt-customer-address" type="text"
                                                class="form-control border-1 border-dark-subtle rounded-1" readonly />
                                        </div>
                                        <div class="button-set order-btns mb-3 d-flex gap-1">
                                            <button id="delete-order-btn"
                                                class="btn btn-danger px-4 rounded-1">Delete</button>
                                            <button id="update-order-btn"
                                                class="btn btn-info text-white px-4 rounded-1">Update</button>
                                            <button id="clear-order-btn"
                                                class="btn btn-success px-4 rounded-1">Clear</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-7 pt-3 pt-lg-0">
                                <div class="row m-auto">
                                    <h2 class="fw-normal fs-5 ps-3 p-2 m-0 w-100 bg-success text-light">
                                        Item Select
                                    </h2>
                                    <div class="search bg-light p-3" style="min-height: 390px !important">
                                        <form id="item-select" class="px-2">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <label for="select-item-code"
                                                            class="form-label fw-bold m-1">Item:</label>
                                                        <select id="select-item-code"
                                                            class="form-select border-1 border-dark-subtle rounded-1">
                                                            <option value="">Select</option>
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <label for="txt-item-code" class="form-label fw-bold m-1">Item
                                                            ID:</label>
                                                        <input id="txt-item-code" type="text"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            pattern="^I[0-9]{3,}$" />
                                                        <div class="invalid-feedback error-bg">
                                                            Enter a valid Item ID
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <label for="txt-item-name"
                                                            class="form-label fw-bold m-1">Name:</label>
                                                        <input id="txt-item-name" type="text"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            readonly />
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <label for="txt-item-price" class="form-label fw-bold m-1">Price
                                                            (Rs.):</label>
                                                        <input id="txt-item-price" type="text"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            readonly />
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <label for="txt-item-qty"
                                                            class="form-label fw-bold m-1">QtyOnHand:</label>
                                                        <input id="txt-item-qty" type="text"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            readonly />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-lg-8 mb-3 mb-lg-0">
                                                        <label for="txt-order-qty" class="form-label fw-bold m-1">Order
                                                            Quantity:</label>
                                                        <input id="txt-order-qty" type="number"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            pattern="^[1-9][0-9]*$" />
                                                        <div class="invalid-feedback error-bg">
                                                            Enter a valid Quantity
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 mt-3 mt-lg-0 d-flex align-items-start">
                                                        <button type="submit" id="add-item-btn" class="btn btn-danger rounded-1 w-100">
                                                            Add Item
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="row pt-3 m-auto">
                                    <div class="purchase bg-light position-relative p-3" style="min-height: 390px !important">
                                        <h3 class="text-primary">Total: 0Rs/=</h3>
                                        <h4 class="text-danger mb-5">SubTotal: 0Rs/=</h4>
                                        <form id="order-payment">
                                            <div class="form-group">
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <label for="txt-order-cash" class="form-label fw-bold m-1">Cash
                                                            (Rs.):</label>
                                                        <input id="txt-order-cash" type="number"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            pattern="^\d+(\.\d{1,2})?$" />
                                                        <div class="invalid-feedback error-bg">
                                                            Enter a valid Price
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <label for="txt-order-discount"
                                                            class="form-label fw-bold m-1">Discount (%):</label>
                                                        <input id="txt-order-discount" type="number"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            pattern="^(?:100(?:\.0{1,2})?|\d{1,2}(?:\.\d{1,2})?)$" />
                                                        <div class="invalid-feedback error-bg">
                                                            Enter a valid Discount
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4 mb-3">
                                                        <label for="txt-order-balance"
                                                            class="form-label fw-bold m-1">Balance (Rs.):</label>
                                                        <input id="txt-order-balance" type="text"
                                                            class="form-control border-1 border-dark-subtle rounded-1"
                                                            readonly />
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" id="order-purchase-btn"
                                                class="btn btn-success my-3 purchase-btn">
                                                Purchase
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row table-content mt-3 m-auto">
                            <div class="col-12">
                                <div class="table-responsive text-center">
                                    <table class="table table-hover">
                                        <thead class="table-success">
                                            <tr>
                                                <th class="border-1 border-success-subtle" style="width: 15%">
                                                    Item Code
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 25%">
                                                    Name
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 15%">
                                                    Unit Price
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 15%">
                                                    Quantity
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 15%">
                                                    Total
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 15%">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="order-detail-tbody" class="border-1 border-success-subtle">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Items Section -->
        <section id="tab-content-4" class="d-none">
            <div class="container">
                <div class="row label p-2 m-auto">
                    <div class="col-lg-12">
                        <h1 class="fw-medium text-start my-auto">
                            <i class="fa-solid fa-cubes"></i>
                            Items
                        </h1>
                    </div>
                </div>
                <div class="row content p-1 m-auto">
                    <div class="col-lg-12 px-0 py-3 px-lg-3">
                        <div class="row m-auto">
                            <div class="col-lg-6">
                                <h2 class="fw-normal fs-5 ps-3 p-2 m-0 w-100 bg-success text-light">
                                    Item Search
                                </h2>
                                <div class="search bg-light p-3">
                                    <form id="search-item" class="px-2" action="search">
                                        <div class="mb-3">
                                            <input type="text" id="txt-search-valuei"
                                                class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                                placeholder="Input Code/Name Here" />
                                            <div class="invalid-feedback error-bg">
                                                Please enter a valid Code or Name
                                            </div>
                                            <div class="d-flex mt-3">
                                                <button type="submit" class="btn btn-success rounded-1">
                                                    Search
                                                </button>
                                                <select id="search-item-by"
                                                    class="form-select ms-2 w-25 border-1 border-dark-subtle rounded-1">
                                                    <option>Code</option>
                                                    <option>Name</option>
                                                </select>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-lg-6 pt-3 pt-lg-0 d-flex justify-content-lg-end justify-content-center">
                                <div class="w-75">
                                    <button class="btn btn-info px-4 rounded-1 w-100 mb-1" data-bs-toggle="modal"
                                        data-bs-target="#newItemModal">
                                        New Item
                                    </button>
                                    <button id="load-all-item-btn" class="btn btn-warning px-4 rounded-1 w-100">
                                        View All Items
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row button-set m-auto">
                            <div class="col-12 px-3">
                                <div class="p-lg-3 py-3 d-flex justify-content-lg-start justify-content-center gap-1">
                                    <button id="delete-item-btn" class="btn btn-danger px-4 rounded-1">
                                        Delete
                                    </button>
                                    <button class="btn btn-info text-white px-4 rounded-1" data-bs-toggle="modal"
                                        data-bs-target="#updateItemModal">
                                        Update
                                    </button>
                                    <button id="clear-item-btn" class="btn btn-success text-white px-4 rounded-1">
                                        Clear
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="row table-content m-auto">
                            <div class="col-12">
                                <div class="table-responsive text-center">
                                    <table class="table table-hover">
                                        <thead class="table-success">
                                            <tr>
                                                <th class="border-1 border-success-subtle" style="width: 20%">
                                                    Item Code
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 30%">
                                                    Name
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 30%">
                                                    Quantity
                                                </th>
                                                <th class="border-1 border-success-subtle" style="width: 20%">
                                                    Unit Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="item-tbody" class="border-1 border-success-subtle">
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ------------ New Item Model ------------ -->
            <div class="modal fade" id="newItemModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header bg-success text-white rounded-0">
                            <h5 class="modal-title">New Item</h5>
                            <button type="button" id="close-savei-icon" class="btn-close"
                                data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="save-item">
                                <div class="mb-1">
                                    <label for="txt-save-icode" class="form-label fw-bold">Item Code :</label>
                                    <input type="text" id="txt-save-icode"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^I[0-9]{3,}$" />
                                    <div class="invalid-feedback error-bg">
                                        Item Code is required [ Pattern : I00X ]
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-save-iname" class="form-label fw-bold">Item Name :</label>
                                    <input type="text" id="txt-save-iname"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^[a-zA-Z0-9\s\-\']{1,50}$" />
                                    <div class="invalid-feedback error-bg">
                                        Item name is required and must follow the correct format
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-save-iqty" class="form-label fw-bold">Item Quantity :</label>
                                    <input type="number" id="txt-save-iqty"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^[1-9][0-9]*$" />
                                    <div class="invalid-feedback error-bg">
                                        Item quantity is required and must be a positive integer
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-save-iprice" class="form-label fw-bold">Item Unit Price :</label>
                                    <input type="text" id="txt-save-iprice"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^\d+(\.\d{1,2})?$" />
                                    <div class="invalid-feedback error-bg">
                                        Enter a valid price (e.g., 10 or 10.99)
                                    </div>
                                </div>

                                <div class="modal-footer button-set mt-4">
                                    <button type="submit" class="btn btn-info rounded-1 text-light">
                                        Save
                                    </button>
                                    <button type="button" id="close-savei-btn" class="btn btn-danger rounded-1"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <!-- ------------ Update Item Model ------------ -->
            <div class="modal fade" id="updateItemModal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content rounded-0">
                        <div class="modal-header bg-success text-white rounded-0">
                            <h5 class="modal-title">Update Item</h5>
                            <button type="button" id="close-updatei-icon" class="btn-close"
                                data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <form id="update-item">
                                <div class="mb-1">
                                    <label for="txt-update-icode" class="form-label fw-bold">Item Code :</label>
                                    <input type="text" id="txt-update-icode"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^I[0-9]{3,}$" />
                                    <div class="invalid-feedback error-bg">
                                        Item Code is required [ Pattern : I00X ]
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-update-iname" class="form-label fw-bold">Item Name :</label>
                                    <input type="text" id="txt-update-iname"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^[a-zA-Z0-9\s\-\']{1,50}$" />
                                    <div class="invalid-feedback error-bg">
                                        Item name is required and must follow the correct format
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-update-iqty" class="form-label fw-bold">Item Quantity :</label>
                                    <input type="number" id="txt-update-iqty"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^[1-9][0-9]*$" />
                                    <div class="invalid-feedback error-bg">
                                        Item quantity is required and must be a positive integer
                                    </div>
                                </div>

                                <div class="mb-1">
                                    <label for="txt-update-iprice" class="form-label fw-bold">Item Unit Price :</label>
                                    <input type="text" id="txt-update-iprice"
                                        class="form-control border-1 border-dark-subtle rounded-1 my-0"
                                        pattern="^\d+(\.\d{1,2})?$" />
                                    <div class="invalid-feedback error-bg">
                                        Enter a valid price (e.g., 10 or 10.99)
                                    </div>
                                </div>

                                <div class="modal-footer button-set mt-4">
                                    <button type="submit" class="btn btn-info rounded-1 text-light">
                                        Update
                                    </button>
                                    <button type="button" id="close-updatei-btn" class="btn btn-danger rounded-1"
                                        data-bs-dismiss="modal">
                                        Close
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Success Toast -->
        <div id="success-toast"
            class="toast align-items-center text-white bg-success border-0 position-fixed bottom-0 end-0 m-3"
            role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">Success! Messege.</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                    aria-label="Close"></button>
            </div>
        </div>

        <!-- Error Toast -->
        <div id="error-toast"
            class="toast align-items-center text-white bg-danger border-0 position-fixed bottom-0 end-0 m-3"
            role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">Error! Messege.</div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"
                    aria-label="Close"></button>
            </div>
        </div>

        <!-- Confirm Delete Modal -->
        <div class="modal fade" id="confirm-delete-model" tabindex="-1" aria-labelledby="confirmDeleteModalLabel"
            aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="confirmDeleteModalLabel">
                            Confirm Deletion
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">Messege</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                            Cancel
                        </button>
                        <button type="button" class="btn btn-danger" id="confirm-delete-btn">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </main>
