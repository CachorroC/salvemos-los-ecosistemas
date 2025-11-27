import { bodyMedium, displayLarge,
  headlineMedium,
  headlineSmall,
  titleMedium, } from '#@/styles/typography.module.css';
import { Button, Tooltip } from '@mui/material';
import Image from 'next/image';
import { left } from '#@/styles/layout.module.css';
import VideoPlayer from '#@/components/video/videoPlayer';

export default function Page() {
  return (
    <div className={left}>
      <h1 className={displayLarge}>
        Vicachá: el río de la luna que Bogotá convirtió en canal
      </h1>
      <p className={bodyMedium}>
        Bogotá nació abrazada por el agua. Sus primeros habitantes, los pueblos
        muiscas, comprendían la ciudad como un valle sagrado tejido por ríos y
        humedales donde cada corriente tenía un carácter, un espíritu y un
        propósito. Entre ellas destacaba el
        <strong>río Vicachá</strong>, “resplandor de luna”, que descendía desde
        los cerros orientales como un hilo de plata, purificando el territorio
        antes de unirse al río Fucha.
      </p>
      <p className={bodyMedium}>
        Hoy, sin embargo, el Vicachá es un fantasma: corre bajo la ciudad,
        encerrado en concreto, desde la Avenida Jimenez en el eje ambiental
        hasta la embajada de Estados Unidos, convertido en el Canal de San
        Francisco y oculto bajo la carrera Séptima. Su historia revela cómo
        Bogotá rompió su relación con el agua… y por qué está obligada a
        recuperarla
      </p>
      <Image
        src={'/20250107_071400.jpg'}
        alt={'Rio Vicachá'}
        width={500}
        height={281}
      />
      <hr />
      <h2 className={headlineMedium}>Un río sagrado bajo la luna</h2>
      <p className={bodyMedium}>
        Para los muiscas, el Vicachá era un río ritual. En sus aguas se
        realizaban baños de purificación, se arrojaban ofrendas y se celebraban
        ciclos lunares relacionados con la fertilidad del territorio. El río no
        solo alimentaba la agricultura: también alimentaba la vida espiritual.
      </p>
      <p className={bodyMedium}>
        Las crónicas coloniales del siglo XVI describen al Vicachá como un cauce
        de aguas claras, bordeado por plantas medicinales y aves que anidaban en
        sus márgenes. Su flujo marcó rutas de poblamiento y fue uno de los ejes
        naturales que definió el trazado inicial de Santafé.
      </p>
      <p className={bodyMedium}>
        Pero la historia de este río cambió drásticamente con la modernización
        del siglo XX.
      </p>
      <h2 className={headlineMedium}>Del río vivo al canal enterrado</h2>
      <p className={bodyMedium}>
        A comienzos del siglo pasado Bogotá multiplicaba su tamaño. Con la
        urbanización acelerada, las autoridades consideraron que los ríos eran
        “problemas sanitarios” y “obstáculos para la movilidad”. La solución fue
        canalizarlos. En 1930 inició la construcción del Canal de San Francisco,
        que transformó el Vicachá en una estructura de concreto y luego en
        tubería subterránea.
      </p>
      <p className={bodyMedium}>
        La ciudad ganó espacio para edificios y avenidas, pero perdió un
        ecosistema completo.
      </p>
      <p className={bodyMedium}>
        La pregunta es: ¿qué se pierde realmente cuando un río se encierra?
      </p>
      <h2 className={headlineMedium}>
        La ciencia es clara: el concreto mata a los ríos
      </h2>
      <p className={bodyMedium}>
        Los ríos no son simples tuberías naturales. Son organismos vivos,
        sistemas porosos, cambiantes, que conectan su cauce con el suelo, la
        atmósfera y la vegetación. Cuando se recubren con concreto, estos
        sistemas se rompen.
      </p>
      <p className={bodyMedium}>
        El cemento convierte el suelo en una superficie impermeable, lo que
        reduce la infiltración, dificulta la recarga de acuíferos y genera picos
        de escorrentía más rápidos e intensos, favoreciendo inundaciones
        <Tooltip title="Booth, D. B. (1991). Urbanization and the natural drainage system—Impacts, solutions, and prognoses. The Northwest Environmental Journal, 7(1), 93–118.">
          <Button>Fuente</Button>
        </Tooltip>
        .
      </p>
      <VideoPlayer sourceUrl={ '/20240307_104327.mp4' } />
      <h3 className={headlineSmall}>
        1. Se interrumpe la recarga del subsuelo
      </h3>
      <p className={bodyMedium}>
        En los ríos sanos, parte del agua se filtra hacia el suelo formando
        acuíferos. Esta agua subterránea hidrata raíces profundas, regula la
        temperatura del suelo y alimenta quebradas y humedales en épocas secas.
      </p>
      <p className={bodyMedium}>
        Por otro lado, El concreto actúa como un sello: impide la infiltración,
        aislando completamente el agua del terreno. Los acuíferos dejan de
        llenarse y el suelo pierde humedad.
      </p>
      <Tooltip title="Price, K. (2011). Effects of watershed topography, soils, land use, and climate on baseflow hydrology in humid regions: A review. Progress in Physical Geography, 35(4), 465–492. https://doi.org/10.1177/0309133311402714">
        <p className={bodyMedium}>
          Al impedir la infiltración, el cemento desconecta el agua superficial
          del subsuelo, reduciendo reservas de agua subterránea y afectando
          flujos base en épocas secas
        </p>
      </Tooltip>

      <h3 className={headlineSmall}>
        2. Se interrumpe la recarga del subsuelo
      </h3>
      <p className={bodyMedium}>
        Un canal de concreto no permite crecimiento de plantas ribereñas,
        elimina microhábitats, aumenta la temperatura del agua, acelera la
        corriente y erosiona tramos aguas abajo. Además los anfibios, insectos,
        peces y aves pierden su hogar.
      </p>
      <p className={bodyMedium}>
        Los cambios de caudal y la erosión del cauce degradan los hábitats para
        peces, macroinvertebrados y plantas acuáticas. Esto reduce la diversidad
        por inestabilidad del canal, aumento de sedimentos y contaminación
        arrastrada por el agua
        <Tooltip title="Paul, M. J., & Meyer, J. L. (2001). Streams in the urban landscape. Annual Review of Ecology and Systematics, 32, 333–365. https://doi.org/10.1146/annurev.ecolsys.32.081501.114040">
          <p className={bodyMedium}>Fuente</p>
        </Tooltip>
      </p>
      <h3 className={headlineSmall}>
        3. El río deja de limpiar su propia agua
      </h3>
      <p className={bodyMedium}>
        Los suelos y raíces que bordean un río natural actúan como filtros
        biológicos. Son las esponjas que se encargan de limpiar y purificar las
        micro-partículas que poluta el agua, Sin esta barrera viva:
      </p>
      <ul>
        <li>aumentan los contaminantes, como el nitrógeno y el azufre</li>
        <li>se interrumpe la descomposición natural de materia orgánica</li>
        <li>proliferan bacterias dañinas.</li>
      </ul>
      <p className={bodyMedium}>
        Al canalizar un río, lo convertimos en un desagüe.
      </p>
      <p className={bodyMedium}>
        El agua que corre por superficies de cemento transporta metales pesados,
        hidrocarburos, nutrientes y contaminantes urbanos, lo que deteriora la
        calidad del agua superficial
        <Tooltip title="United States Environmental Protection Agency (EPA). (2003). National management measures to control nonpoint source pollution from urban areas. U.S. Environmental Protection Agency.">
          <p className={bodyMedium}>Fuente</p>
        </Tooltip>
      </p>
      <p className={bodyMedium}>
        El cemento impide el intercambio gaseoso y de humedad entre
        suelo-atmósfera, lo que reduce la diversidad microbiana y afecta
        procesos biogeoquímicos esenciales
        <Tooltip title="Zhao, Y., Zhang, G., Qin, P., & Zhang, X. (2013). Effects of impervious surfaces on the hydrology and ecology of urban streams. Environmental Earth Sciences, 68(7), 2139–2149.">
          <p className={bodyMedium}>Fuente</p>
        </Tooltip>
      </p>
      <h2 className={headlineMedium}>
        Los ríos sanos que Colombia aún conserva
      </h2>
      <p className={bodyMedium}>
        Mientras Bogotá enterró casi todos sus ríos, en otras regiones del país
        sobreviven ejemplos de cuencas vivas:
      </p>
      <ol>
        <li>
          <h3 className={titleMedium}>Río Bita (Vichada)</h3>
          <p className={bodyMedium}>
            Considerado uno de los ríos más prístinos del planeta. Sin
            canalización, con una recarga subterránea activa y un ecosistema de
            peces, tortugas y aves acuáticas en equilibrio.
          </p>
        </li>
        <li>
          <h3 className={titleMedium}>Río Pirá Paraná (Vaupés)</h3>
          <p className={bodyMedium}>
            Custodiado por comunidades indígenas. La selva protege la calidad
            del agua y crea suelos esponjosos que infiltran lluvia
            constantemente.
          </p>
        </li>
        <li>
          <h3 className={titleMedium}>
            Río Anchicayá (Valle del Cauca, parte alta)
          </h3>
          <p className={bodyMedium}>
            Bordeado por bosque húmedo tropical, con tramos cristalinos y
            diversidad de anfibios.
          </p>
        </li>
        <li>
          <h3 className={titleMedium}>Río Güejar (Meta)</h3>
          <p className={bodyMedium}>
            Un corredor ecológico rodeado de galería forestal donde la
            vegetación regula la temperatura y mantiene la humedad del suelo.
          </p>
        </li>
      </ol>
      <p className={bodyMedium}>
        Estos ejemplos demuestran que un río necesita bosque y suelo permeable,
        no concreto.
      </p>
      <hr />
      <h2 className={headlineMedium}>
        Volver a unir el agua con las plantas: un camino para Bogotá
      </h2>
      <p className={bodyMedium}>
        La recuperación del Vicachá no implica desenterrar todo su cauce, sino
        reconectar el territorio con los procesos ecológicos del agua. Lograr
        hacer que las plantas y sus raices toquen el agua y vuelvan a ser uno
        solo. Bogotá puede aprender de modelos internacionales de
        renaturalización de ríos urbanos (como Seúl, Madrid o Portland), pero
        también de sus propias montañas.
      </p>
      <p className={bodyMedium}>
        Aquí algunas líneas de acción que pueden guiar la investigación y la
        política pública:
      </p>
      <h3 className={headlineSmall}>
        1. Reforestación de cuencas con especies nativas
      </h3>
      <p className={bodyMedium}>El bosque ribereño es una infraestructura natural que retiene humedad, reduce la erosión, filtra contaminantes y regula la temperatura del agua. </p>
      <p className={bodyMedium}>Especies recomendadas para Bogotá:</p>
      <ul>
        <li>
          <p className={bodyMedium}>aliso</p>
        </li>
        <li>
          <p className={bodyMedium}>arrayán</p>
        </li>
        <li>
          <p className={bodyMedium}>chilco</p>
        </li>
        <li>
          <p className={bodyMedium}>sauco</p>
        </li>
        <li>
          <p className={bodyMedium}>curubo</p>
        </li>
        <li>
          <p className={bodyMedium}>mano de oso</p>
        </li>
      </ul>
      <h3 className={headlineSmall}><strong>2. Zonas de infiltración urbana</strong></h3>
      <p className={bodyMedium}>En lugar de sellar cada superficie:</p>
      <ul>
        <li>
          <p className={bodyMedium}>jardines de lluvia</p>
        </li>
        <li>
          <p className={bodyMedium}>franjas permeables en andenes</p>
        </li>
        <li>
          <p className={bodyMedium}>humedales artificiales</p>
        </li>
        <li>
          <p className={bodyMedium}>parques fluviales sobre antiguos cursos de río</p>
        </li>
      </ul>
      <p className={bodyMedium}>Estas infraestructuras permiten que el agua vuelva al subsuelo y recargue acuíferos.</p>
      <h3 className={headlineSmall}><strong>3. Filtración mediante raíces y plantas acuáticas</strong></h3>
      <p className={bodyMedium}>Los sistemas de fitorremediación pueden limpiar aguas contaminadas con plantas como:</p>
      <ul>
        <li>
          <p className={bodyMedium}>juncos</p>
        </li>
        <li>
          <p className={bodyMedium}>eneas</p>
        </li>
        <li>
          <p className={bodyMedium}>totoras</p>
        </li>
        <li>
          <p className={bodyMedium}>lentejas de agua</p>
        </li>
      </ul>
      <p className={bodyMedium}>Son filtros biológicos que reducen metales pesados y materia orgánica. Para el caso del vicachá sería demasiado útil en su intersección con el canal San Agustín en donde la polución de los lavaderos de automóviles dañan su balance ecológico.</p>
      <h3 className={headlineSmall}><strong>4. Corredores ecológicos sobre el trazo de ríos canalizados</strong></h3>
      <p className={bodyMedium}>Incluso si el Vicachá siguiera siendo subterráneo en algunos tramos, sobre él puede existir:</p>
      <ul>
        <li>
          <p className={bodyMedium}>un corredor verde,</p>
        </li>
        <li>
          <p className={bodyMedium}>suelo permeable,</p>
        </li>
        <li>
          <p className={bodyMedium}>jardines de infiltración,</p>
        </li>
        <li>
          <p className={bodyMedium}>microhábitats para aves e insectos <strong>polinizadores</strong>.</p>
        </li>
      </ul>
      <h3 className={headlineSmall}><strong>5. Políticas basadas en cuencas, no en barrios</strong></h3>
      <p className={bodyMedium}>La ciudad debe planificarse según la lógica del agua, ejemplos claros de cómo podemos comenzar a reestructurar la política pública de Bogotá en cuanto a la preservacion de los rios, que recordemos son sujetos de derecho bajo la ley colombiana, estan:</p>
      <ul>
        <li>
          <p className={bodyMedium}>presupuesto obligatorio para renaturalización,</p>
        </li>
        <li>
          <p className={bodyMedium}>protección de nacederos,</p>
        </li>
        <li>
          <p className={bodyMedium}>restauración de ríos secundarios (Arzobispo, San Agustín, Manzanares),</p>
        </li>
        <li>
          <p className={bodyMedium}>educación ciudadana sobre el ciclo hidrológico.</p>
        </li>
      </ul>
      <hr />
      <h2 className={headlineMedium}><strong>Reflexión final: volver a escuchar el río</strong></h2>
      <p className={bodyMedium}>El Vicachá nunca desapareció: la ciudad lo silenció. Pero bajo el pavimento, el río sigue corriendo, esperando recuperar su espacio y su vida.</p>
      <p className={bodyMedium}>Reconciliar Bogotá con sus ríos no es nostalgia: es una necesidad ecológica, climática y urbana. Los cerros orientales aún respiran, los acuíferos aún existen, y las plantas nativas aún pueden brotar si reciben agua.</p>
      <p className={bodyMedium}>Revivir las cuencas no es un sueño imposible: es la única manera de construir una ciudad que dialogue con su propio territorio.</p>
    </div>
  );
}
