const ALL_PLATFORM=0
const ANDROID=1
const WEB=2
const OTHER=3


class Project{
    constructor(platform,name,description,actions=[],techStack=[], screenshots=[]){
        this.platform=platform,
        this.name=name,
        this.description=description,
        this.actions=actions,
        this.techStack=techStack,
        this.screenshots=screenshots
        
    }
}

const projects=[
    new Project(ANDROID,"KMusic", 
      `Una aplicación sencilla con una arquitectura modular
      para reproducción de música offline escrita en Kotlin para Android.
       La aplicación tiene dos versiones o flavours: KMusic Bass que usa la librería BASS de un4seen y KMusic Exo 
       que usa La API MediaPlayer de Android.`,[
         { label: "Github", url: "https://github.com/hall9zeha/MusicPlayerApp" },
        { label: "Demo", url: "https://github.com/hall9zeha/MusicPlayerApp/raw/main/docs/demo/Kmusic_bass_version.apk" }],
      [{label:"kotlin"},{label:"kotlin view"},{label:"material you"},{label:"jaudiotagger"},
        {label:"MVVM"},{label:"view binding"},{label:"dagger hilt"},{label:"BASS"},{label:"equalizer"}, 
        {label:"exoplayer"},{label:"services"},{label:"glide"},{label:"room"},
        {label:"flavors"},{label:"modularized"},{label:"disc-cover-view"},{label:"navigation"},
        {label:"splash screen API"},{label:"view pager 2"}],
        [{imageUrl:"./images/musicapp-project-mockup.jpg",name:"music app"},{imageUrl:"./images/musicapp-project-mockup.jpg", name:"KMusic"}]
      ),


    new Project(ANDROID,"Music Player Compose (BASS)", 
      `Una aplicación  básica para reproducción música escrita en kotlin usando el Jetpack Compose y la librería BASS
      de un4seen para la decodificación de audio. El propósito de  esta app es servir de ejemplo para quien lo necesite.`,
      [{ label: "GitHub", url: "https://github.com/hall9zeha/MusicPlayerCompose-BASS" }
    ],
    [
      {label:"Kotlin"},{label:"jetpack compose"},{label:"view binding"},{label:"BASS un4seen"},{label:"navigation compose"},
      {label:"mvvm"},{label:"coroutines"},{label:"mediaStore"}
    ],
    [
     {imageUrl:"./images/kmusic-bass-mokup.jpg", name:"Music Player Compose (BASS)"},
    ]),

    new Project(ANDROID,"Music Player Compose (Exoplayer)",
       `
      Otra aplicación  básica para reproducción música escrita en kotlin usando el Jetpack Compose y la librería Exoplayer
      de Android para la decodificación de audio. También tiene como propósito servir de ejemplo.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/MusicPlayerCompose" }
    ],
    [
      {label:"Kotlin"},{label:"jetpack compose"},{label:"view binding"},{label:"exoplayer"},{label:"mediaplayer"},{label:"navigation compose"},
      {label:"mvvm"},{label:"coroutines"},{label:"mediaStore"}
    ],
    [
      {imageUrl:"/images/kmusic-exo-mockup.jpg", name:"Music Player Compose (Exoplayer)"}
    ]),

    new Project(ANDROID,"Xaminote",
      `XamiNote es una aplicación para la creación de notas y listas de tareas
       con la posibilidad de poner recordatorios, encriptar notas y tareas, 
       compartirlas y personalizarlas con colores y fuentes. 
       Escrita en Java y construida en Android Studio.      
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/XamiNote" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.BarryZea.XamiNote&hl=es&gl=US" }
    ],
    [
      {label:"Java"},{label:"android view"},{label:"view binding"},{label:"room"},{label:"navigation"},{label:"mvvm"},
      {label:"dagger hilt"},{label:"material 3"},{label:"reminder"},{label:"services"},{label:"custom colors"}
    ],
    [
      {imageUrl:"./images/xaminote-mockup.jpg",name:"Xaminote"}
    ]),

    new Project(ANDROID,"Wallnice",
      `WallNice Wallpapers es una aplicación de la más variada colección fondos de pantalla
       en alta calidad para Android que consume la API de WallHaven, Escrita en Kotlin y construida en Android Studio.
      `,[
            { label: "GitHub", url: "https://github.com/hall9zeha/WallNice-Wallpapers" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.wallhaven&hl=es&gl=US" }
      ],
      [
        {label:"Kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"room"},{label:"navigation"},{label:"mvvm"},
        {label:"dagger hilt"},{label:"material 3"},{label:"wallhave API"},{label:"retrofit"},{label:"glide"}
      ],
      [
        {imageUrl:"./images/wallnice-mockup.jpg",name:"Wallnice"}
      ]),

    new Project(ANDROID,"Wallhaven Wallpapers",
      `Wallpapers es una aplicación de fondos de pantalla en alta calidad para Android que consume las APIs de WallHaven y Unsplash 
      dos grandes repositorios de imágenes muy conocidas, Escrita en Kotlin y construida en Android Studio.

      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/UnsplashAndWallhaven-Wallpapers" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.unsplashapp" }
    ],
    [
       {label:"Kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"room"},{label:"navigation"},{label:"mvvm"},
        {label:"dagger hilt"},{label:"material you"},{label:"wallhave API"},{label:"unsplash API"},{label:"retrofit"},{label:"glide"}
    ],
    [
      {imageUrl:"./images/unsplashapp-mockup.png", name:"Wallhaven Wallpapers"}
    ]),
    new Project(ANDROID,"Nimbo Weather",
      `Nimbo Weather es una aplicación de pronóstico del clima, 
      escrita en Java y construida en Android Studio. 
      Es una aplicación amigable y ligera que hace uso del servicio en la versión gratuita del clima de la API OpenWeatherMap.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/NimboWeather" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.appweather" }
    ],
    [
      {label:"Java"},{label:"android view"},{label:"view binding"},{label:"google maps API"},{label:"openweathermap API"},{label:"volley"},{label:"mvvm"},
        {label:"dagger hilt"},{label:"material 3"},{label:"services"},{label:"glide"},{label:"lottie animations"}
    ],
    [
      {imageUrl:"./images/nimbo-mockup.jpg", name:"Nimbo weather"}
    ]),
    new Project(ANDROID,"Lemodoro",
      `Aplicación de gestión de tareas usando la técnica(Pomodoro) desarrollada en Android Studio escrita en Kotlin y Java.
      Una prueba técnica que se convirtió en publicación en la tienda de Android.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/PomodoroApp" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzeha.pomodoroapp" }
    ],
    [
       {label:"Java"},{label:"android view"},{label:"view binding"},{label:"mvvm"},{label:"timer"},{label:"services"},
        {label:"material 3"},{label:"room"}
    ],[
      {imageUrl:"./images/lemodoro-mockup.png",name:"Lemodoro"}
    ]),
    new Project(ANDROID,"Simple Unit Converter",
      `Simple Unit Converter es una aplicación(reto técnico) de conversión de unidades de medida,
       escrita en Java utilizando el patrón de arquitectura MVVM, 
       inyección de dependencias con Dagger Hilt y Material 3 como tema principal de las vistas.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/UnitConverterApp" },
      { label: "store", url: "https://play.google.com/store/apps/details?id=com.barryzea.simpleadmob" }
    ],
    [
      {label:"Java"},{label:"android view"},{label:"view binding"},{label:"mvvm"},{label:"room"}
    ],
    [
      {imageUrl:"./images/unitconverter-mockup.jpg", name:"Simple unit converter"}
    ]),
    new Project(ANDROID,"Nilo App",
      `Aplicación de ventas orientada al vendedor/administrador y al cliente, 
      desarrollada en Android Studio usando el lenguaje kotlin y los servicios de 
      Firebase firestore, Firebase Realtime Datase, Firebase Storage, Firebase Authentication y también Firebase Cloud Messaging.
      La finalidad de esta aplicación es la de poner en práctica todos los conocimientos adquiridos en el manejo del servicio de Firebase de google.`,
      [
         { label: "GitHub", url: "https://github.com/hall9zeha/NiloPartnerApp" }
    ],
    [
      {label:"kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"firebase firestore"},{label:"real database"},{label:"glide"},
        {label:"firebase authentication"},{label:"firebase messaging"},{label:"material 3"},{label:"coroutines"}
    ],[
      {imageUrl:"./images/nilopp-mockup.jpg", name:"Nilo app"}
    ]),

    new Project(ANDROID,"TMDB Movies",
      `Aplicación Android escrita en Kotlin que utiliza la API TMDB  para mostrar una lista de películas. 
      Implementa diferentes variantes (flavors) una de ella emulando ser gratuita con acceso limitado
       y otra que emula ser de pago con acceso a más características como usar tu cuenta de usuario para tus colecciones.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/AndroidFlavoursApp" },
      { label: "demo", url: "https://github.com/hall9zeha/AndroidFlavoursApp/raw/main/docs/demo/tmdb-pro.apk" }
    ],
    [
      {label:"kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"mvvm"},{label:"flavors"},{label:"room"},{label:"data store preferences"},
      {label:"glide"},{label:"TMDB API"},{label:"retrofit"},{label:"okhttp"},
      {label:"material you"},{label:"room"},{label:"splash screen API"}
    ],
    [
      {imageUrl:"./images/tmdbmovies-mockup.jpg",name:"tmbd movies"}
    ]),
    new Project(ANDROID,"Christmas countdown",
      `Una aplicación de Android de cuenta regresiva para Navidad que utiliza Compose Jetpack, 
      un patrón de arquitectura MVVM, base de datos Room, Kotlin Flows e inyección de dependencia con Dagger Hilt.
      Para quien le gusta la navidad.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/ChristmasAppCompose" },
      { label: "demo", url: "https://github.com/hall9zeha/ChristmasAppCompose/raw/main/demo/christmas-countdown.apk" }
    ],
    [
      {label:"kotlin"},{label:"jetpack compose"},{label:"view binding"},{label:"mvvm"},{label:"room"},{label:"flows"},{label:"data store preferences"},
      {label:"lottie animations"},{label:"coil"},{label:"navigation compose"}
    ],
    [
      {imageUrl:"./images/christmasapp-mockup.jpg", name:"christmas countdown"}
    ]),
    new Project(ANDROID,"Simple notepad",
      `Una pequeña aplicación de notas para Android que usa una arquitectura modular escrita en kotlin view.
      Cuya finalidad fue la de aprender a usar módulos y onboarding.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/Modularized-Android-App" },
      { label: "demo", url: "https://github.com/hall9zeha/Modularized-Android-App/raw/main/docs/demo/notepad-release.apk" }
    ],
    [
       {label:"kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"mvvm"},{label:"room"},{label:"dagger hilt"},{label:"data store preferences"},
      {label:"lottie animations"},{label:"glide"},{label:"view pager 2"},{label:"coroutines"},
      {label:"modularized"},{label:"color picker"},{label:"splas screen API"},{label:"onboarding"}
    ],
    [
      {imageUrl:"./images/modularizedapp-mockup.jpg", name:"simple notepad"}
    ]),
    new Project(ANDROID,"Mamory game App",
      `
      El clásico reto técnico del juego de memoria pero para Android, y esta vez usando como tema
      elementos y personajes del videojuego Braid y escrito en Kotlin.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/MemoryGame-Android" },
      { label: "demo", url: "https://github.com/hall9zeha/MemoryGame-Android/raw/main/demo/braid_memory_game.apk" }
    ],
    [
      {label:"kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"mvvm"},{label:"glide"},{label:"material design"},{label:"braid game theme"},
      {label:"coroutines"}
    ],
    [
      {imageUrl:"./images/memorygame-mockup.jpg", name:"memory game"}
    ]),
    new Project(ANDROID,"Connect Four",
      `
      Otro clásico reto técnico del juego conectar cuatro. Así debemos conectar cuatro elementos
       en cualquier dirección jugando contra la CPU. Escrito en kotlin  y Java.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/ConnectFour-Android" },
      { label: "demo", url: "https://github.com/hall9zeha/ConnectFour-Android/raw/main/demo/conecta4.apk" }
    ],
    [
      {label:"kotlin"},{label:"java"},{label:"view binding"},{label:"kotlin view"},{label:"mvc"},{label:"material design"},{label:"lottie animation"},
      {label:"coroutines"}
    ],
    [
      {imageUrl:"./images/conecta4-mockup.jpg", name:"connect four"}
    ]),
     new Project(ANDROID,"Tic tac toe",
      `
      Clásico reto técnico del juego tres en raya para Android escrita en Java, usando firebase firestore y firebase authentication.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/TicTacToe" }],
         [
           {label:"java"},{label:"android view"},{label:"view binding"},{label:"firebase firestore"},{label:"firebase authentication"},{label:"material design"},{label:"lottie animation"}
         ],
         [
          {imageUrl:"./images/tictactoe-mockup.jpg", name:"tres en raya"}
         ]),
    new Project(ANDROID,"Fire chat",
      `
      Aplicación de chat escrita en Java para Android usando
      los servicios de bases de datos en la nube de Google Firebase. 
      Esta aplicación es parte de un repositorio que contiene un compendio de apps de ejemplo
      en el uso de diferentes servicios de Firebase.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/MasterFirebase" }
      
    ],
    [
       {label:"java"},{label:"android view"},{label:"view binding"},{label:"firebase firestore"},{label:"firebase authentication"},
       {label:"firebase realtime database"},{label:"firebase storage"},{label:"firebase cloud messaging"},{label:"firebase UI library"},{label:"volley"},
       {label:"glide"},{label:"even bus"},{label:"gson"},
       {label:"material design"},{label:"lottie animation"}
      
    ],
    [
      {imageUrl:"./images/firechar-mockup.jpg", name:"Fire chat"}
    ]),
    new Project(ANDROID,"Mini Twitter",
      `
     Aplicación clon de twitter escrita en Java que usa una API desarrolada dentro del curso de Udemy de la cual
     es parte. Muy importante, es posible  que la API haya cambiado y no se pueda hacer la conexión
     pero el código de la app está disponible para su uso sin restricciones.  
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/MiniTwitter" }
      
    ],
    [
       {label:"java"},{label:"android view"},{label:"view binding"},{label:"retrofit"},{label:"glide"},
       {label:"view model"},{label:"dexter"},{label:"gson"}
    ],
    [
      {imageUrl:"./images/minitwitter-mockup.jpg", name:"mini twitter"}
    ]),
    new Project(ANDROID,"Disc Cover View",
      `
      Una librería escrita en Java para Android view que implementa una vista en forma de disco compacto o CD con animaciones de rotación.
      Su propósito es el de mostrar las carátulas de las canciones en aplicaciones de música, de hecho es usada por mi aplicación KMusic.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/DiscCoverView" },
         {label:"deploy",url:" https://jitpack.io/#hall9zeha/DiscCoverView"}
        
    ],
    [
      {label:"java"},{label:"android view"},{label:"material design"},{label:"library"},
       {label:"jitpack.io"}
    ],
    [
      {imageUrl:"./images/disccoverview.gif", name:"disc cover view"}
    ]),

    new Project(ANDROID,"Material Button loading",
      `
      Una librería escrita en Kotlin para Android view que implementa un botón con animaciones de carga, cuyo propósito es servir
      como indicador en formularios de inicio de sesión o cualquier otro uso. Ya los sé, hay bastantes y mejores alternativas
      pero el placer de usar algo hecho por uno mismo es el motivo de su creación.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/MaterialButtonLoading" },
          {label:"deploy",url:"https://jitpack.io/#hall9zeha/MaterialButtonLoading"}
    ],
    [
      {label:"kotlin"},{label:"kotlin view"},{label:"material 3"},{label:"library"},
       {label:"jitpack.io"}
    ],
    [
      {imageUrl:"./images/screen2.gif", name:"materia button loading"}
    ]),
    new Project(ANDROID,"Dots loading view",
      `
      Una librería escrita en Kotlin para Android que implementa una animación de carga personalizable, 
      utilizando cualquier recurso Drawable. La motivación detrás de su creación fue la satisfacción de construir algo propio.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/DotsLoadingView" },
        {label:"deploy",url:"https://jitpack.io/#hall9zeha/DotsLoadingView"}
    ],
    [
       {label:"kotlin"},{label:"kotlin view"},{label:"material 3"},{label:"library"},
       {label:"jitpack.io"}
    ],
    [
      {imageUrl:"./images/captura2.gif", name:"dots loading view"}
    ]),

     new Project(ANDROID,"Android UXUI",
      `Repositorio que contiene varias aplicaciones escritas en Java y Kotlin, usando las últimas referencias y recomendaciones de google con respecto a Material Components.
      Es posible que las referencias y recomendaciones hayan cambiado a esta fecha.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/Android-design-UX-UI" }],
         [
           {label:"java"},{label:"kotlin"},{label:"view binding"},{label:"android view"},{label:"material components"}
      
         ],
         [
          {imageUrl:"./images/uiux-mockup.jpg", name:"android uxui"}
         ]),
     new Project(ANDROID,"PizzaBuy",
      `
      Aplicación para simular pedidos de pizzas, escrita en Kotlin utilizando el patrón de arquitectura MVVM.
      El objetivo de hacer esta app fue la de aprender el manejo de Room database con relaciones de tablas
      más complejas (en este caso una estructura de arbol, Maestro-Detalle-SubDetalle).
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/PizzaBuy" },
      { label: "demo", url: "https://github.com/hall9zeha/PizzaBuy/raw/main/demo/app-debug.apk" }
    ],
    [
       {label:"kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"mvvm"},{label:"material components"},{label:"material design"},
       {label:"room"}, {label:"dagger hilt"},{label:"navigation"}, {label:"glide"}
    ],
    [
      {imageUrl:"./images/pizzabuy-mockup.jpg", name:"pizzabuy"}
    ]),
    new Project(ANDROID,"Rick&Morty",
      `Aplicación que usa RickAndMortyAPI para mostrar información de los personajes
       de la serie e implementa la librería RXJava3, base de datos Room, LiveData, 
       inyección de dependencias con Dagger Hilt y el patrón CleanCode con MVVM para android.
       También implementa GrapQL en una de sus ramas
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/RickAndMortyApp-RX-Java" },
      { label: "demo", url: "https://github.com/hall9zeha/RickAndMortyApp-RX-Java/raw/main/demo/app-debug.apk" }
    ],
    [
      {label:"kotlin"},{label:"java"},{label:"android view"},{label:"view binding"},{label:"mvvm"},{label:"graphql"},{label:"material components"},{label:"material design"},
       {label:"room"},{label:"rxjava 3"},{label:"glide"},{label:"retrofit"},{label:"mockk"}, {label:"dagger hilt"},{label:"ryck&morty API"}, {label:"material 3"}
    ],
    [
      {imageUrl:"./images/rickymosthy-mockup.jpg", name:"rick&morty"}
    ]),
    new Project(ANDROID,"Billing App",
      `Esta aplicación  escrita en Java fue desarrollada para probar la librería de compras integradas de Google.
      Su objetivo es la de servir de ejemplo y repositorio. Tener en cuenta que para 
      probar la funcionalidad completa se debe contar con una cuenta en la PlayStore de Google.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/BillingApp" }],
         [
          {label:"kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"billing library google"},{label:"graphql"},{label:"material design"},
         ]
         ,[
          {imageUrl:"./images/billingapp-mockup.jpg", name:"billing app"}
         ]),

    new Project(ANDROID,"Advertisement App",
      `Aplicación escrita en Kotlin que implementa las formas de publicidad  más usadas del SDK de Google Ads.
      `,[
    { label: "GitHub", url: "https://github.com/hall9zeha/AdvertisementsApp" }],
    [
      {label:"kotlin"},{label:"kotlin view"},{label:"view binding"},{label:"google ads sdk"},{label:"material design"},
    ],
    [
      {imageUrl:"./images/advertisementapp-mockup.jpg", name:"advertisement app"}
    ]),
    new Project(ANDROID,"Simple weather",
      `Aplicación   básica de pronóstico del clima, escrita en Kotlin para Android usando data binding y la API de OpenWeatherMap 
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/SimpleWeather" }
      
    ],
    [
       {label:"kotlin"},{label:"java"},{label:"android view"},{label:"openweathermap API"},
       {label:"material design"},{label:"data binding"},{label:"mvvm"},{label:"dagger hilt"}
    ],
    [
      {imageUrl:"./images/simpleweather-mockup.jpg", name:"simple weather"}
    ]),
    new Project(ANDROID,"Attack on Titan Quiz",
      `Si otra aplicación que es un clásico reto técnico de preguntas y respuestas
       usando la temática del anime Shingeki no Kyojin(El ataque de los titanes), 
       desarrollada en Android Studio con el patrón de arquitectura MVVM e inyección de dependencias con Dagger Hilt.`,
       [
         { label: "GitHub", url: "https://github.com/hall9zeha/AttackOnTitanQuiz" },
          { label: "demo", url: "https://github.com/hall9zeha/AttackOnTitanQuiz/raw/main/apk/QuizApp1.0_Kotlin.apk" }
    ],
    [
       {label:"kotlin"},{label:"java"},{label:"android view"},{label:"room"},
       {label:"material design"},{label:"view binding"},{label:"mvvm"},{label:"glide"}
    ],
    [
      {imageUrl:"./images/quizapp-mockup.jpg", name:"attack on titan"}
    ]),
     new Project(ANDROID,"Android flows",
      `
      Aplicación que ejemplifica el uso de flujos en Android con Kotlin. 
      La API de Coinbase se utiliza para llamar a un flujo constante
       y obtener el precio de una criptomoneda (bitcoin en este caso) en tiempo real.
      `,[
         { label: "GitHub", url: "https://github.com/hall9zeha/Android-Flows" }
             
      
    ],
    [
      {label:"kotlin"},{label:"kotlin view"},{label:"retrofit"},
       {label:"dagger hilt"},{label:"kotlin flows"},{label:"counbase API"}
    ],
    [
      {imageUrl:"./images/flowsandroid.gif", name:"android flows"}
    ]),
     new Project(WEB,"Java Script Projects",
      `Más de 30 proyectos escritos en JavaScript, 
      desde los más sencillos hasta algunos full stack, 
      con uso de base de datos relacionales (mySql) y no relacionales (Mongo db), 
      consumo de APIs, uso de Node.js, React, Bootstrap y librerías variadas. Más ejemplos en el repositorio`,
       [
         { label: "GitHub", url: "https://github.com/hall9zeha/JavaScript-Projects" },
          { label: "deploy", url: "https://cotizador-cripto-moneda.netlify.app/" },
          { label: "deploy", url: "https://searching-pixabay-image.netlify.app/" }
         
      
    ],
    [
       {label:"java script"},{label:"html"},{label:"css"},{label:"mysql"},
       {label:"react"},{label:"api"},{label:"mongo db"},{label:"node.js"},{label:"bootstrap"},
       {label:"electrón ui"}
    ],
    [
      {imageUrl:"./images/jsprojects1-mockup.jpg",name:"jsprojects"}
    ]),
     new Project(WEB,"Java Script Projects 2",
      `Un Conjunto de aplicaciones escritas en Java Script usando React, node js, firebase, mongo db,
       redux y tests con React Test Library. Más ejemplos en el repositorio`,
       [
         { label: "GitHub", url: "https://github.com/hall9zeha/JavaScriptProjects-2" },
          { label: "deploy", url: "https://gif-react-app.onrender.com/" },
          { label: "deploy", url: "https://mern-calendar-axqt.onrender.com/login" }
         
      
    ],
    [
       {label:"java script"},{label:"html"},{label:"css"},{label:"mysql"},
       {label:"react"},{label:"api"},{label:"mongo db"},{label:"node.js"},{label:"bootstrap"},
       {label:"firebase"},{label:"redux"},{label:"mern"},{label:"react test library"}, {label:"sass"},
       {label:"render"}
    ],
    [
      {imageUrl:"./images/jsprojects2-mockup.jpg", name:"jsprojects2"}
    ]),
    new Project(OTHER,"Conky Audacious Cover",
      `Soy usuario Linux desde hace varios años y me gusta escuchar música mientras programo o hago cualquier cosa
      en el ordenador.
      Así que hice un script en shell para mostrar las carátulas de mis canciones en mi escritorio
      mientras uso Audacious con toda mi música offline. Se que la mayor parte del tiempo estaré viendo
      código pero cuando me distraigo (que es a menudo xD), veo mi escritorio y me gusta.
      `,
       [
         { label: "GitHub", url: "https://github.com/hall9zeha/Conky-Audacious-Cover" }  
    ],
    [
      {label:"linux"},{label:"script"},{label:"shell"}
    ],
    [
      {imageUrl:"./images/conky-audacious-mockup.jpg", name:"conky audacious cover"},
      {imageUrl:"./images/conky-audacious-cover-1.jpg", name:"conky audacious 1"},
      {imageUrl:"./images/conky-audacious-cover-2.jpg", name:"conky audacious 2"}
    ]),
     new Project(OTHER,"Python intermediate samples",
      `Un repositorio bien organizado por temas sobre ejercicios y ejemplos escritos
       en python sobre Jupiter notebook, desde fundamentos
      de programación, hasta temas más avanzados como manejos de ficheros, bases de datos, etc.`,
      [
         { label: "GitHub", url: "https://github.com/hall9zeha/Intermediate-Python-Samples" }
         
      
    ],
    [
      {label:"python"},{label:"jupyter notebook"}
    ],
    [
      {imageUrl:"./images/screen2.png", name:"python intermediate samples"}
    ]),

]

export {
    projects,
   }