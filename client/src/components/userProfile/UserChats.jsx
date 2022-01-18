const UserChats = () => {

    return (
        <>
            <div class="row">
                <div class="col-md-8">
                  
                    <div
                        data-mdb-spy="scroll"
                        data-mdb-target="#scrollspy1"
                        data-mdb-offset="0"
                        class="scrollspy-example"
                    >
                        <section id="example-1">
                            <h1>Section 1</h1>
                            ...
                        </section>
                        <section id="example-2">
                        <h1>Section 2</h1>
                            ...
                        </section>
                        <section id="example-3">
                        <h1>Section 2</h1>
                            ...
                            <section id="example-sub-A">
                                <h3>Subsection A</h3>
                                ...
                            </section>
                            <section id="example-sub-B">
                                <h3>Subsection B</h3>
                                ...
                            </section>
                        </section>
                        <section id="example-4">
                            <h3>Section 4</h3>
                            ...
                        </section>
                    </div>
                 
                </div>

                <div class="col-md-4">
                  
                    <div id="scrollspy1" class="sticky-top">
                        <ul class="nav flex-column nav-pills menu-sidebar">
                            <li class="nav-item">
                                <a class="nav-link" href="#example-1">Section 1</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#example-2">Section 2</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#example-3">Section 3</a>
                                <ul class="nav flex-column ps-3">
                                    <li class="nav-item">
                                        <a class="nav-link" href="#example-sub-A">Subsection A</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#example-sub-B">Subsection B</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#example-4">Section 4</a>
                            </li>
                        </ul>
                    </div>
                   
                </div>
            </div>
        </>
    )
}

export default UserChats;