const ALL_PLATFORM=0
const ANDROID=1
const WEB=2
const OTHER=3


class Project{
    constructor(platform,name,description,imageUrl,actions=[]){
        this.platform=platform,
        this.name=name,
        this.description=description,
        this.imageUrl=imageUrl,
        this.actions=actions
        
    }
}

const projects=[
    new Project(ANDROID,"KMusic", 
      `Una aplicación sencilla con una arquitectura modular
      para reproducción de música offline escrita en Kotlin para Android.
       La aplicación tiene dos versiones o flavours: KMusic Bass que usa la librería BASS de un4seen y KMusic Exo 
       que usa La API MediaPlayer de Android.`,
      "./images/musicapp-project-mockup.jpg",[
         { label: "Github", url: "https://github.com/hall9zeha/MusicPlayerApp" },
        { label: "Demo", url: "https://github.com/hall9zeha/MusicPlayerApp/raw/main/docs/demo/Kmusic_bass_version.apk" }]),


    new Project(ANDROID,"Music Player Compose (BASS)", 
      `Una aplicación  básica para reproducción música escrita en kotlin usando el Jetpack Compose y la librería BASS
      de un4seen para la decodificación de audio. El propósito de  esta app es servir de ejemplo para quien lo necesite.`,
      "./images/kmusic-bass-mokup.jpg",[{ label: "GitHub", url: "https://github.com/hall9zeha/MusicPlayerCompose-BASS" }
    ]),

    new Project(ANDROID,"Music Player Compose (Exoplayer)",
       `
      Otra aplicación  básica para reproducción música escrita en kotlin usando el Jetpack Compose y la librería Exoplayer
      de Android para la decodificación de audio. También tiene como propósito servir de ejemplo.
      `,"./images/kmusic-exo-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/MusicPlayerCompose" }
    ]),

    new Project(ANDROID,"Xaminote",
      `XamiNote es una aplicación para la creación de notas y listas de tareas
       con la posibilidad de poner recordatorios, encriptar notas y tareas, 
       compartirlas y personalizarlas con colores y fuentes. 
       Escrita en Java y construida en Android Studio.      
      `,"./images/xaminote-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/XamiNote" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.BarryZea.XamiNote&hl=es&gl=US" }
    ]),

    new Project(ANDROID,"Wallnice",
      `WallNice Wallpapers es una aplicación de la más variada colección fondos de pantalla
       en alta calidad para Android que consume la API de WallHaven, Escrita en Kotlin y construida en Android Studio.
      `,"./images/wallnice-mockup.jpg",[
            { label: "GitHub", url: "https://github.com/hall9zeha/WallNice-Wallpapers" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.wallhaven&hl=es&gl=US" }
      ]),

    new Project(ANDROID,"Wallhaven Wallpapers",
      `Wallpapers es una aplicación de fondos de pantalla en alta calidad para Android que consume las APIs de WallHaven y Unsplash 
      dos grandes repositorios de imágenes muy conocidas, Escrita en Kotlin y construida en Android Studio.

      ` ,"./images/unsplashapp-mockup.png",[
         { label: "GitHub", url: "https://github.com/hall9zeha/UnsplashAndWallhaven-Wallpapers" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.unsplashapp" }
    ]),
    new Project(ANDROID,"Nimbo Weather",
      `Nimbo Weather es una aplicación de pronóstico del clima, 
      escrita en Java y construida en Android Studio. 
      Es una aplicación amigable y ligera que hace uso del servicio en la versión gratuita del clima de la API OpenWeatherMap.
      `,"./images/nimbo-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/NimboWeather" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.appweather" }
    ]),
    new Project(ANDROID,"Lemodoro",
      `Aplicación de gestión de tareas usando la técnica(Pomodoro) desarrollada en Android Studio escrita en Kotlin y Java.
      Una prueba técnica que se convirtió en publicación en la tienda de Android.
      `,"./images/lemodoro-mockup.png",[
         { label: "GitHub", url: "https://github.com/hall9zeha/PomodoroApp" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzeha.pomodoroapp" }
    ]),
    new Project(ANDROID,"Simple Unit Converter",
      `Simple Unit Converter es una aplicación(reto técnico) de conversión de unidades de medida,
       escrita en Java utilizando el patrón de arquitectura MVVM, 
       inyección de dependencias con Dagger Hilt y Material 3 como tema principal de las vistas.
      `,"./images/unitconverter-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/UnitConverterApp" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.simpleadmob" }
    ]),
    new Project(ANDROID,"Nilo App",
      `Aplicación de ventas orientada al vendedor/administrador y al cliente, 
      desarrollada en Android Studio usando el lenguaje kotlin y los servicios de 
      Firebase firestore, Firebase Realtime Datase, Firebase Storage, Firebase Authentication y también Firebase Cloud Messaging.
      La finalidad de esta aplicación es la de poner en práctica todos los conocimientos adquiridos en el manejo del servicio de Firebase de google.`,
      "./images/nilopp-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/NiloPartnerApp" }
    ]),

    new Project(ANDROID,"TMDB Movies",
      `Aplicación Android escrita en Kotlin que utiliza la API TMDB  para mostrar una lista de películas. 
      Implementa diferentes variantes (flavors) una de ella emulando ser gratuita con acceso limitado
       y otra que emula ser de pago con acceso a más características como usar tu cuenta de usuario para tus colecciones.
      `,"./images/tmdbmovies-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/AndroidFlavoursApp" },
      { label: "demo", url: "https://github.com/hall9zeha/AndroidFlavoursApp/raw/main/docs/demo/tmdb-pro.apk" }
    ]),
    new Project(ANDROID,"Christmas countdown",
      `Una aplicación de Android de cuenta regresiva para Navidad que utiliza Compose Jetpack, 
      un patrón de arquitectura MVVM, base de datos Room, Kotlin Flows e inyección de dependencia con Dagger Hilt.
      Para quien le gusta la navidad.
      `,"./images/christmasapp-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/ChristmasAppCompose" },
      { label: "demo", url: "https://github.com/hall9zeha/ChristmasAppCompose/raw/main/demo/christmas-countdown.apk" }
    ]),
    new Project(ANDROID,"Simple notepad",
      `Una pequeña aplicación de notas para Android que usa una arquitectura modular escrita en kotlin view.
      Cuya finalidad fue la de aprender a usar módulos y onboarding.
      `,"./images/modularizedapp-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/Modularized-Android-App" },
      { label: "demo", url: "https://github.com/hall9zeha/Modularized-Android-App/raw/main/docs/demo/notepad-release.apk" }
    ]),
    new Project(ANDROID,"Mamory game App",
      `
      El clásico reto técnico del juego de memoria pero para Android, y esta vez usando como tema
      elementos y personajes del videojuego Braid y escrito en Kotlin.
      `,"./images/memorygame-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/MemoryGame-Android" },
      { label: "demo", url: "https://github.com/hall9zeha/MemoryGame-Android/raw/main/demo/braid_memory_game.apk" }
    ]),
    new Project(ANDROID,"Connect Four",
      `
      Otro clásico reto técnico del juego conectar cuatro. Así debemos conectar cuatro elementos
       en cualquier dirección jugando contra la CPU. Escrito en kotlin  y Java.
      `,"./images/conecta4-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/ConnectFour-Android" },
      { label: "demo", url: "https://github.com/hall9zeha/ConnectFour-Android/raw/main/demo/conecta4.apk" }
    ]),
     new Project(ANDROID,"Tic tac toe",
      `
      Clásico reto técnico del juego tres en raya para Android escrita en Java, usando firebase firestore y firebase authentication.
      `,"./images/tictactoe-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/TicTacToe" }]),
    new Project(ANDROID,"Fire chat",
      `
      Aplicación de chat escrita en Java para Android usando
      los servicios de bases de datos en la nube de Google Firebase. 
      Esta aplicación es parte de un repositorio que contiene un compendio de apps de ejemplo
      en el uso de diferentes servicios de Firebase.
      `,"./images/firechar-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/MasterFirebase" }
      
    ]),
    new Project(ANDROID,"Mini Twitter",
      `
     Aplicación clon de twitter escrita en Java que usa una API desarrolada dentro del curso de Udemy de la cual
     es parte. Muy importante, es posible  que la API haya cambiado y no se pueda hacer la conexión
     pero el código de la app está disponible para su uso sin restricciones.  
      `,"./images/minitwitter-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/MiniTwitter" }
      
    ]),
    new Project(ANDROID,"Disc Cover View",
      `
      Una librería escrita en Java para Android view que implementa una vista en forma de disco compacto o CD con animaciones de rotación.
      Su propósito es el de mostrar las carátulas de las canciones en aplicaciones de música, de hecho es usada por mi aplicación KMusic.
      `,"./images/disccoverview.gif",[
         { label: "GitHub", url: "https://github.com/hall9zeha/DiscCoverView" }
    ]),

    new Project(ANDROID,"Material Button loading",
      `
      Una librería escrita en Kotlin para Android view que implementa un botón con animaciones de carga, cuyo propósito es servir
      como indicador en formularios de inicio de sesión o cualquier otro uso. Ya los sé, hay bastantes y mejores alternativas
      pero el placer de usar algo hecho por uno mismo es el motivo de su creación.
      `,"./images/screen2.gif",[
         { label: "GitHub", url: "https://github.com/hall9zeha/MaterialButtonLoading" }
    ]),
    new Project(ANDROID,"Dots loading view",
      `
      Una librería escrita en Kotlin para Android que implementa una animación de carga personalizable, 
      utilizando cualquier recurso Drawable. La motivación detrás de su creación fue la satisfacción de construir algo propio.
      `,"./images/captura2.gif",[
         { label: "GitHub", url: "https://github.com/hall9zeha/DotsLoadingView" }
    ]),

     new Project(ANDROID,"Android UXUI",
      `Repositorio que contiene varias aplicaciones escritas en Java y Kotlin, usando las últimas referencias y recomendaciones de google con respecto a Material Components.
      Es posible que las referencias y recomendaciones hayan cambiado a esta fecha.
      `,"./images/uiux-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/Android-design-UX-UI" }]),
     new Project(ANDROID,"PizzaBuy",
      `
      Aplicación para simular pedidos de pizzas, escrita en Kotlin utilizando el patrón de arquitectura MVVM.
      El objetivo de hacer esta app fue la de aprender el manejo de Room database con relaciones de tablas
      más complejas (en este caso una estructura de arbol, Maestro-Detalle-SubDetalle).
      `,"./images/pizzabuy-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/PizzaBuy" },
      { label: "demo", url: "https://github.com/hall9zeha/PizzaBuy/raw/main/demo/app-debug.apk" }
    ]),
    new Project(ANDROID,"Rick&Morty",
      `Aplicación que usa RickAndMortyAPI para mostrar información de los personajes
       de la serie e implementa la librería RXJava3, base de datos Room, LiveData, 
       inyección de dependencias con Dagger Hilt y el patrón CleanCode con MVVM para android.
       También implementa GrapQL en una de sus ramas
      `,"./images/rickymosthy-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/RickAndMortyApp-RX-Java" },
      { label: "demo", url: "https://github.com/hall9zeha/RickAndMortyApp-RX-Java/raw/main/demo/app-debug.apk" }
    ]),
    new Project(ANDROID,"Billing App",
      `Esta aplicación  escrita en Java fue desarrollada para probar la librería de compras integradas de Google.
      Su objetivo es la de servir de ejemplo y repositorio. Tener en cuenta que para 
      probar la funcionalidad completa se debe contar con una cuenta en la PlayStore de Google.
      `,"./images/billingapp-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/BillingApp" }]),

    new Project(ANDROID,"Advertisement App",
      `Aplicación escrita en Kotlin que implementa las formas de publicidad  más usadas del SDK de Google Ads.
      `,"./images/advertisementapp-mockup.jpg",[
    { label: "GitHub", url: "https://github.com/hall9zeha/AdvertisementsApp" }]),
    new Project(ANDROID,"Simple weather",
      `Aplicación   básica de pronóstico del clima, escrita en Kotlin para Android usando data binding y la API de OpenWeatherMap 
      `,"./images/simpleweather-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/SimpleWeather" }
      
    ]),
    new Project(ANDROID,"Attack on Titan Quiz",
      `Si otra aplicación que es un clásico reto técnico de preguntas y respuestas
       usando la temática del anime Shingeki no Kyojin(El ataque de los titanes), 
       desarrollada en Android Studio con el patrón de arquitectura MVVM e inyección de dependencias con Dagger Hilt.`,
       "./images/quizapp-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/AttackOnTitanQuiz" },
          { label: "demo", url: "https://github.com/hall9zeha/AttackOnTitanQuiz/raw/main/apk/QuizApp1.0_Kotlin.apk" }
         
      
    ]),
     new Project(ANDROID,"Android flows",
      `
      Aplicación que ejemplifica el uso de flujos en Android con Kotlin. 
      La API de Coinbase se utiliza para llamar a un flujo constante
       y obtener el precio de una criptomoneda (bitcoin en este caso) en tiempo real.
      `,
       "./images/flowsandroid.gif",[
         { label: "GitHub", url: "https://github.com/hall9zeha/Android-Flows" }
             
      
    ]),
     new Project(WEB,"Java Script Projects",
      `Más de 30 proyectos escritos en JavaScript, 
      desde los más sencillos hasta algunos full stack, 
      con uso de base de datos relacionales (mySql) y no relacionales (Mongo db), 
      consumo de APIs, uso de Node.js, React, Bootstrap y librerías variadas. Más ejemplos en el repositorio`,
       "./images/jsprojects1-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/JavaScript-Projects" },
          { label: "deploy", url: "https://cotizador-cripto-moneda.netlify.app/" },
          { label: "deploy", url: "https://searching-pixabay-image.netlify.app/" }
         
      
    ]),
     new Project(WEB,"Java Script Projects 2",
      `Un Conjunto de aplicaciones escritas en Java Script usando React, node js, firebase, mongo db,
       redux y tests con React Test Library. Más ejemplos en el repositorio`,
       "./images/jsprojects2-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/JavaScriptProjects-2" },
          { label: "deploy", url: "https://gif-react-app.onrender.com/" },
          { label: "deploy", url: "https://mern-calendar-axqt.onrender.com/login" }
         
      
    ]),
    new Project(OTHER,"Conky Audacious Cover",
      `Soy usuario Linux desde hace varios años y me gusta escuchar música mientras programo o hago cualquier cosa
      en el ordenador.
      Así que hice un script en shell para mostrar las carátulas de mis canciones en mi escritorio
      mientras uso Audacious con toda mi música offline. Se que la mayor parte del tiempo estaré viendo
      código pero cuando me distraigo (que es a menudo xD), veo mi escritorio y me gusta.
      `,
       "./images/conky-audacious-mockup.jpg",[
         { label: "GitHub", url: "https://github.com/hall9zeha/Conky-Audacious-Cover" }
         
      
    ]),
     new Project(OTHER,"Python intermediate samples",
      `Un repositorio bien organizado por temas sobre ejercicios y ejemplos escritos
       en python sobre Jupiter notebook, desde fundamentos
      de programación, hasta temas más avanzados como manejos de ficheros, bases de datos, etc.`,
       "./images/screen2.png",[
         { label: "GitHub", url: "https://github.com/hall9zeha/Intermediate-Python-Samples" }
         
      
    ]),

]

export {
    projects,
   }