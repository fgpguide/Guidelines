# A Guide for Time Series Visualization for the Federal Geospatial Platform (FGP)

## What is Time Series data?

- [x] Time series data, in general, refers to a sequence of data collected over time intervals, giving us the ability to track changes over time. 

- [x] Time series data in this training refers to time series in a spatial context (i.e. Spatio-temporal data) that: 

    * [x] Tracks changes in fixed locations, such as monitoring stations  
    
    * [x] Represents spatially-varying changes via a series of maps (e.g., temperature maps)
    
## Forms of Time Series Data Visualization 

Time series data in a spatial context may be visualized in the forms of map animation, map-based charts, and maps for change detection.

### Map Animation

<figure>
  <iframe id="iframe1" allowfullscreen=true importance = high data-src="https://jolevesq.github.io/contributed-plugins/range-slider/samples/range-slider-index.html?sample=17"></iframe>
  <figcaption>Figure 1: Map Showing Maximum Temperature</figcaption>
</figure>

Time series animation is used widely in visualizing time series data in a spatial context. Figure 1 is an example showing maximum temperature changes over time across Canada using the Range Slider.  Upon a click, the animation will start displaying maximum temperature variations across space between 2013 – 2020. More information on the data source can be found from the [metadata](https://gcgeo.gc.ca/geonetwork/metadata/eng/2cf09706-d645-4f73-ad32-095b5330c356){target=\_blank}.

### Time Series Charts

<figure>
  <iframe id="iframe2" allowfullscreen=true importance = high data-src="https://jolevesq.github.io/contributed-plugins/chart/samples/chart-index.html?sample=7"></iframe>
  <figcaption>Figure 2: Map Showing Shellfish Sites with charts available by sites upon click</figcaption>
</figure>

Very often, time series data is acquired through monitoring on specific sites (e.g., weather station). Map-based charts are used to visualize the monitoring data on specific sites, which are displayed on a map. Figure 2 is an example of time series data represented using map-based charts. The water quality monitoring sites for Shellfish sites are represented on the map. Upon a click on a specific site, the user will see a multi-variate chart showing changes in variable values over time. More information on the data source can be found from the [metadata](https://gcgeo.gc.ca/geonetwork/metadata/eng/6417332a-7f37-49bd-8be9-ce0402deed2a){target=\_blank}.

### Maps for change detection

<figure>
  <iframe id="iframe3" allowfullscreen=true importance = high data-src="https://jolevesq.github.io/contributed-plugins/swiper/samples/swiper-index.html?sample=3"></iframe>
  <figcaption>Figure 3: Maps Showing Land Cover of Canada (2010 & 2015)</figcaption>
</figure>

Change detection is another way to visualize changes for Spatio-temporal data. It enables the user to examine differences over a period across space. Figure 3 illustrates this form of visualization for land cover changes.  More information on the data source can be found from the [metadata](https://gcgeo.gc.ca/geonetwork/metadata/eng/e9dee957-e04d-46fb-b7e4-701739736173){target=\_blank}.

## Purpose of this Guide 

Time series data is essential to understanding socio-economic and environmental dynamics, hence a critical component of the geospatial data of the FGP in support of policy and decision-making. This data needs to be properly visualized to enable the users to comprehend the dynamics. Currently, time series data cannot be effectively visualized in Web Map Services, the standard of the Open Geospatial Consortium that the FGP uses for data visualization. To fill this gap, the FGP team has customized selected open-source tools to the FGP environment as plugins, including the Range Slider, Thematic Slider, Charting Tools and Swiper. This Guide describes how FGP data contributors can use these plugins to configure time series visualizations based on their data and publish them in the FGP.

## Structure of This Guide

This Guide starts by familiarizing you with the fundamental tool through which you use the FGP plugins, i.e., the FGP Authoring Tool. It then provides you with high-level considerations in deciding which plugin may suit your needs. A detailed description is then followed for each plugin about what it is, when it is used, and how to use it. A use case is provided with each of the plugins to showcase its functionality as well as the step-by-step process to configure it. Finally, the process to publish your configured plugins to the FGP is described. In addition to the plugins introduced for time series visualization, FGP has also made available several plugins for the end-user to use on the FGP interface. A description of these plugins completes this Guide.