import React from "react";

function Footer() {
    return (
        <footer>
        <div className="container-fluid">
        <div className="row p-5 pb-2 bg-dark text-secondary" >
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h3">Logo</p>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h4">Productos</p>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none" >
                Jeans
              </button>
            </div>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none" >
                Shorts
              </button>
            </div>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none" >
                Camperas
              </button>
            </div>
            <div class="mb-2">
              <button className="text-secondary text-decoration-none" >
                Ofertas
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h4">Contacto</p>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none" >
                Direccion: Belgrano 1855 CABA
              </button>
            </div>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none" >
                Facebook: Mechisjeans@facebook.com
              </button>
            </div>
            <div class="mb-2">
              <button className="text-secondary text-decoration-none" >
                Instagram: @Mechisjeans
              </button>
            </div>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none" >
                Whatsapp: loguito
              </button>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h4">Compra</p>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none" >
                Preguntas frecuentes
              </button>
            </div>
            <div className="mb-2">
              <button className="text-secondary text-decoration-none">
                Terminos y condiciones
              </button>
            </div>
          </div>
          <div className="col-xs-12 pt-4">
            <p className="mt-3 text-white text-center">
              Copyright - All rights reserved © 2022
            </p>
          </div>
        </div>
      </div>
    </footer>
    );
}

export default Footer;