# Guide de visualisation des séries temporelles pour la Federal Geospatial Platform (FGP)

## Qu'est-ce qu'une série chronologique de données ?

- [x] Les données de séries chronologiques, en général, font référence à une séquence de données collectées sur des intervalles de temps, ce qui nous permet de suivre les changements dans le temps. 

- [x] Dans le cadre de cette formation, les données de séries temporelles font référence à des séries temporelles dans un contexte spatial (c'est-à-dire des données spatio-temporelles) qui :

    * [x] Suivre les changements dans des lieux fixes, tels que les stations de surveillance. 
     
    * [x] Représente des changements variant dans l'espace par le biais d'une série de cartes (par exemple, des cartes de température).
    
## Formes de visualisation des données de séries chronologiques 

Les données de séries temporelles dans un contexte spatial peuvent être visualisées sous la forme d'animations cartographiques, de graphiques cartographiques et de cartes pour la détection des changements.

### Animation de la carte

<figure>
  <iframe id="iframe1" allowfullscreen=true importance = high data-src="https://jolevesq.github.io/contributed-plugins/range-slider/samples/range-slider-index.html?sample=17"></iframe>
  <figcaption>Figure 1 : Carte montrant la température maximale</figcaption>
</figure>

L'animation de séries chronologiques est largement utilisée pour visualiser des données de séries chronologiques dans un contexte spatial. La figure 1 est un exemple montrant les variations maximales de température dans le temps à travers le Canada en utilisant le curseur de plage.  Après un clic, l'animation commencera à afficher les variations maximales de température dans l'espace entre 2013 et 2020. De plus amples informations sur la source de données sont disponibles sur le site Web de la Commission européenne [métadonnées](https://gcgeo.gc.ca/geonetwork/metadata/fre/2cf09706-d645-4f73-ad32-095b5330c356){target=\_blank}.

### Graphiques de séries chronologiques
<figure>
  <iframe id="iframe2" allowfullscreen=true importance = high data-src="https://jolevesq.github.io/contributed-plugins/chart/samples/chart-index.html?sample=7"></iframe>
  <figcaption>Figure 2 : Carte montrant les sites conchylicoles avec des graphiques disponibles par sites en cliquant dessus.</figcaption>
</figure>

Très souvent, les données de séries chronologiques sont acquises par la surveillance de sites spécifiques (par exemple, une station météorologique). Les graphiques cartographiques sont utilisés pour visualiser les données de surveillance sur des sites spécifiques, qui sont affichés sur une carte. La figure 2 est un exemple de données de séries chronologiques représentées à l'aide de graphiques cartographiques. Les sites de surveillance de la qualité de l'eau pour les sites conchylicoles sont représentés sur la carte. En cliquant sur un site spécifique, l'utilisateur verra un graphique multi-variable montrant les changements dans les valeurs des variables au fil du temps. De plus amples informations sur la source de données sont disponibles sur le site Web de la Commission européenne [métadonnées](https://gcgeo.gc.ca/geonetwork/metadata/fre/6417332a-7f37-49bd-8be9-ce0402deed2a){target=\_blank}.

### Des cartes pour la détection des changements

<figure>
  <iframe id="iframe3" allowfullscreen=true importance = high data-src="https://jolevesq.github.io/contributed-plugins/swiper/samples/swiper-index.html?sample=3"></iframe>
  <figcaption>Figure 3 : Carte montrant la couverture terrestre du Canada (2010 et 2015)</figcaption>
</figure>

La détection des changements est une autre façon de visualiser les changements pour les données spatio-temporelles. Elle permet à l'utilisateur d'examiner les différences sur une période dans l'espace. La figure 3 illustre cette forme de visualisation pour les changements de la couverture terrestre.  De plus amples informations sur la source de données sont disponibles dans les [métadonnées](https://gcgeo.gc.ca/geonetwork/metadata/fre/e9dee957-e04d-46fb-b7e4-701739736173){target=\_blank}.

## Objectif du présent guide 

Les données de séries temporelles sont essentielles pour comprendre les dynamiques socio-économiques et environnementales, d'où une composante essentielle des données géospatiales du FGP pour soutenir la politique et la prise de décision. Ces données doivent être correctement visualisées pour permettre aux utilisateurs de comprendre la dynamique. Actuellement, les données de séries chronologiques ne peuvent pas être visualisées efficacement dans les Web Map Services, la norme de l'Open Geospatial Consortium que le FGP utilise pour la visualisation des données. Pour combler cette lacune, l'équipe du FGP a adapté certains outils open-source à l'environnement du FGP sous forme de plugins, notamment le Range Slider, le Thematic Slider, les Charting Tools et le Swiper. Ce guide décrit comment les contributeurs de données FGP peuvent utiliser ces plugins pour configurer des visualisations de séries temporelles basées sur leurs données et les publier dans FGP.


## Structure de ce guide

Ce guide commence par vous familiariser avec l'outil fondamental par lequel vous utilisez les plugins FGP, à savoir l'outil de création FGP. Il vous fournit ensuite des considérations de haut niveau pour décider quel plugin peut répondre à vos besoins. Chaque plugin fait ensuite l'objet d'une description détaillée de ce qu'il est, quand il est utilisé et comment l'utiliser. Un cas d'utilisation est fourni avec chacun des plugins pour présenter sa fonctionnalité ainsi que le processus étape par étape pour le configurer. Enfin, le processus de publication de vos plugins configurés sur le FGP est décrit. En plus des plugins introduits pour la visualisation des séries temporelles, le FGP a également mis à disposition plusieurs plugins que l'utilisateur final peut utiliser sur l'interface du FGP. Une description de ces plugins complète ce guide.

