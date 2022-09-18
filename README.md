# Backend-NodeJs

## Rutas 

     api/v1/auth                     ────────>    # Autenticación
                ├─── /login 
                ├─── /register
     
     api/v1/movies                   ────────>    # Películas
                ├─── /add-character
        GET     ├─── /
        POST    ├─── /
        Update  ├─── /:id
        Delete  ├─── /:id
        GET     ├─── /:id
        
     api/v1/characters               ────────>    # Personajes
        GET     ├─── /
        POST    ├─── /
        Update  ├─── /:id
        Delete  ├─── /:id
        GET     ├─── /:id
        
     api/v1/gender                   ────────>    # Generos
        GET     ├─── /
        POST    ├─── /
        
     api/v1/users                    ────────>    # Usuarios
        GET     ├─── /
        Update  ├─── /:id
        Delete  ├─── /:id
        GET     ├─── /:id
         
## Instalación

- Clona este repositorio: 

        git clone https://github.com/AndresGuerreroLeal/Backend-NodeJs.git

- Ìnicializa el proyecto: 

        npm install 
        Agregar variables de entorno en base a .env.example
        npm run dev
        
