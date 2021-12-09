import React, { useRef } from "react";
import Winner1 from "./1.jpg";
import Winner2 from "./2.jpg";
import Winner3 from "./3.jpg";
import Special1 from "./4.jpg";
import Special2 from "./5.jpg";

const Pilot = () => {
  const winningRef1 = useRef(null);
  const winningRef2 = useRef(null);
  const winningRef3 = useRef(null);
  const specialRef1 = useRef(null);
  const specialRef2 = useRef(null);

  const executeScroll = (ref) => {
    ref.current.scrollIntoView();
  };

  return (
    <section className="Faqs top">
      <div className="heading heading-yellow heading-center top">
        <h1>PILOT</h1>
      </div>

      <div className="container">
        <div className="row " style={{ marginTop: "60px" }}>
          <div className="col-md-4">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src={Winner1}
              alt="winner_image"
            />
            <h5
              style={{ marginTop: "20px", cursor: "pointer" }}
              onClick={() => executeScroll(winningRef1)}
            >
              B-SOT - Bus Scheduling Optimization Toolkit
            </h5>
          </div>

          <div className="col-md-4">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src={Winner2}
              alt="winner_image"
            />
            <h5
              style={{ marginTop: "20px", cursor: "pointer" }}
              onClick={() => executeScroll(winningRef2)}
            >
              Commutify - Empowering Public Transit Using Machine Learning
            </h5>
          </div>

          <div className="col-md-4">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src={Winner3}
              alt="winner_image"
            />
            <h5
              style={{ marginTop: "20px", cursor: "pointer" }}
              onClick={() => executeScroll(winningRef3)}
            >
              Real-Time Public Transport Demand-Supply Gap Assessment Tool
            </h5>
          </div>
        </div>

        <div className="row" style={{ marginTop: "40px" }}>
          <div className="col-md-2"></div>
          <div className="col-md-4">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src={Special1}
              alt="winner_image"
            />
            <h5
              style={{ marginTop: "20px", cursor: "pointer" }}
              onClick={() => executeScroll(specialRef1)}
            >
              EVERs Charging Platform
            </h5>
          </div>
          <div className="col-md-4">
            <img
              style={{ width: "100%", borderRadius: "20px" }}
              src={Special2}
              alt="winner_image"
            />
            <h5
              style={{ marginTop: "20px", cursor: "pointer" }}
              onClick={() => executeScroll(specialRef2)}
            >
              Here to There – Changing Perception through Communication
            </h5>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2
              ref={winningRef1}
              style={{
                textAlign: "center",
                textDecoration: "underline",
                marginTop: "40px",
              }}
            >
              WINNING IDEA #1
            </h2>
          </div>
        </div>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-10 pt-3">
            <h3>B-SOT - Bus Scheduling Optimization Toolkit</h3>
            Indian Institute of Technology, Delhi; IIT Kharagpur
          </div>
          <div className="col-10 pt-3">
            <strong>CONTEXT:</strong>
            <br />
            The solution is a PT schedule automation and optimization toolkit to
            address the inefficiencies in the existing bus schedules. The
            toolkit is fully developed as an executable software. It takes
            existing PT schedule as input, identifies inefficiencies and
            addresses them, and provides updated optimized schedule
            automatically. It was tested for Bangalore Metropolitan Transport
            Corporation (BMTC), the largest public bus operator in India. The
            toolkit does not require any capital expenditure, and is ready to be
            scaled up to other cities and their unique data formats.
            <br />
            <br />
            <strong>PROBLEM STATEMENT:</strong>
            <br />
            Scheduling is an analytically intensive exercise that should reduce
            cost of operations while ensuring service levels, meeting travel
            demand, incorporating travel, rest times as well as availability of
            resources such as fleet, crew and depots. Indian bus agencies
            typically adopt manual scheduling practices, thereby being able to
            use only simple calculations, and they employ scheduling at the
            bus-level without incorporating network attributes. Both of these
            attributes limit them in incorporating service levels and resource
            constraints highlighted in the first statement of this section. This
            leads to significant inefficiencies in timetables, vehicles and crew
            scheduling practices. In addition to traditional route wise
            timetables and bus-wise schedules, large bus networks also face the
            problem of schedule overlaps. For example, the city of Bengaluru has
            11 percent of its trips overlapping and 47 percent of the bus fleet
            having schedules with such overlaps. Despite awareness of this,
            resolving this is challenging due to network complexities and
            requires data analytics and Operations Research expertise.
            <br />
            <br />
            <strong>OBJECTIVE:</strong>
            <br />
            The overall objective of the solution is to develop an automated and
            optimized timetabling and scheduling toolkit for PT agencies. In
            this regard, the toolkit performs the following activities:
            <br />
            • Cleanse and standardizes the data as required for its purposes;
            <br />
            • Groups the problems into appropriate small sub-problems to get
            faster solution to the specific sub-problem of interest;
            <br />
            • Develops efficient strategies to reduce overlaps by minimum
            disruption in the schedule; and,
            <br />
            • Develops efficient algorithm to redeploy non-overlapping excluded
            trips.
            <br />
            <br />
            <strong>APPROACH AND METHOD</strong>
            <br />
            The Toolkit takes the current schedule available with transit
            authorities as input and generates improved schedules as output. It
            uses principles of operations research, advanced analytics, and
            tools such as Python. These approaches are built into the Toolkit,
            reducing the need for transit authorities to deal with
            methodological details. The Toolkit involves two key steps.
            <br />
            <strong>Rescheduling</strong>
            <br />
            Rescheduling was the first key step of the toolkit. We first defined
            the maximum deviation allowed in the rescheduled trips. Then, we
            estimated the number of overlapping trips in the existing schedule.
            If there were overlapping trips, we checked the headways of the
            preceding and succeeding trips. Next, we estimated the number of
            overlapping trips that could be rescheduled without disturbing the
            schedules of non-overlapping trips. Finally, we started rescheduling
            the overlapping trips by either dispatching them earlier or later
            than the existing schedules. If the preceding headway was less than
            or equal to the succeeding headway, we first rescheduled the trips
            by dispatching them before the current start time until the headway
            after rescheduling was more than the minimum allowed limit. We then
            rescheduled the remaining trips by dispatching them after the
            current start time. This step has two major benefits from the
            perspective of PT agencies and the toolkit solutioning: minimal
            scheduling disruptions and significant reduction in the
            computational burden for the redeployment step detailed in the next
            section
            <br />
            <strong>Redeployment</strong>
            <br />
            In this step, we first removed the buses that had overlapping trips
            even after rescheduling. This naturally caused the cancellation of
            the non-overlapping trips of the removed buses which needed to be
            restored for the satisfaction of passenger demand. We resolved this
            by redeploying the remaining buses to undertake these trips as
            follows: Redeployment of the nonoverlapping trips of excluded buses
            should be done in an efficient way to save buses and have minimal
            disruptions. For this purpose, a ‘redeployment’ module is developed
            within the toolkit. This module effectively implements a
            mathematical model that determines the minimum number of buses
            required to undertake all the remaining non-overlapping trips. To
            determine the allocation of buses to these trips, we first formulate
            a cluster of adjacent trips. Each cluster consists of a group of
            trips having immediate connectivity. A single bus will cover at
            least one cluster. However, after completing all the trips within
            the given cluster, if time is still available, i.e., travel time in
            a cluster is less than the shift duration, the bus can also serve
            another cluster.
            <br />
            <br />
            <strong>EXPECTED RESULTS AND OUTCOMES</strong>
            <br />
            The toolkit outputs an optimized schedule for PT agencies by a mere
            click of the toolkit button. The toolkit and its solution are highly
            beneficial for both users as well as service providers. Eighty-two
            buses were saved for BMTC which resulted in financial saving of more
            than 130 billions rupees per year without increasing the waiting
            time for users. Further, it provides regular breaks to crew members
            after every relevant trip which leads to appropriate rest for them.
            Finally, it enables a much more regularized, hassle-free system as
            opposed to manual scheduling of buses. The UI of the dashboard is
            indicated in the associated image.
            <br />
            <br />
            <strong>CONCLUSION</strong>
            <br />
            The toolkit is highly relevant and financially viable for PT
            agencies in India and other developing world because it does not
            require any capital expenditure. It is easy to replicate for any
            city having detailed scheduling data and also easy to scale as there
            is no restriction on the amount of data that can be fed into it.
            Further, it provides a unique opportunity to PT agencies to automate
            and optimize their bus scheduling, something which was impossible to
            achieve with their conventional and manual scheduling based
            practices.
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2
              ref={winningRef2}
              style={{
                textAlign: "center",
                textDecoration: "underline",
                marginTop: "20px",
              }}
            >
              WINNING IDEA #2
            </h2>
          </div>
        </div>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-10 pt-3">
            <h3>
              Commutify - Empowering Public Transit Using Machine Learning
            </h3>
            Indian Institute of Technology, Roorkee
          </div>
          <div className="col-10 pt-3">
            <strong>CONTEXT:</strong>
            <br />
            India’s road transport system has long been struggling with
            inefficiencies, such as high congestion levels, limited multi-modal
            integration, and inadequate PT systems. With the onset of the global
            COVID-19 pandemic that put lives of many on hold and prompted people
            to rethink their choices and behaviour. This shift can be seen in
            the perception study of TERI on the impact of COVID-19 in urban
            mobility, which shows a decrease of around 40 percent in the use of
            the metro and a 45 percent decrease in the use of buses in Delhi.
            <br />
            <br />
            <strong>PROBLEM STATEMENT:</strong>
            <br />
            Post-COVID PT ridership has witnessed a huge downfall due to
            cognizant cautiousness and poor effectiveness toward curbing
            physical contact, especially in the context of Indian cities where
            PT is a crucial mode of transport. In mega-cities, high-performance
            transit systems were equally affected. There is a need to understand
            the possible nature of this shift in mobility patterns and devise
            appropriate strategies to promote sustainable modes of transport.
            Some of the overarching issues plaguing transportation systems
            presently include:
            <br />
            • Lack of reliable, updated and sufficient information to plan
            journey in advance
            <br />
            • Unavailability of waiting time information at various stations of
            urban public transport system
            <br />
            • In post-COVID scenarios, health and public safety is compromised
            in shared transportation
            <br />
            systems.
            <br />
            Therefore, an integrated, data-driven solution needs to be developed
            to empower and encourage the populace towards the adoption of a
            revamped transportation system, which is far more reliable,
            convenient, and accessible. A solution that will not only boost the
            ridership but also ensure equity for all user segments.
            <br />
            <br />
            <strong>OBJECTIVE:</strong>
            <br />
            In order to restore the ridership and to attract new PT riders,
            following factors can be considered from the user’s perspective:
            <br />
            • Prior Occupancy information
            <br />
            • Real-time transit vehicle information
            <br />
            • Increased reliability
            <br />
            The core component of the proposal is a route planning platform,
            which embeds a multi-modal routing algorithm to suggest the various
            alternatives to users, provides real-time occupancy of a public
            transport vehicle and the expected occupancy at a transit station.It
            also provides dynamic vehicle load information i.e. dynamic
            occupancy for each vehicle.
            <br />
            <br />
            <strong>APPROACH AND METHOD</strong>
            <br />
            The flow diagram presented shows the Machine Learning (ML) pipeline
            of the model. It shows the data input and its processing to extract
            the necessary features for the occupancy prediction in the transit.
            Weights of the model trained on historic data will be updated
            biweekly with the Electronic Ticketing Machine data from Capital
            Region Urban Transport (CRUT). The best model is finally used for
            the deployment of mobile application and digital board. Real-time
            occupancy data from CCTV footage of interiors of transit operated by
            CRUT will be extracted and then will be displayed on the installed
            digital boards of stations in Bhubaneswar. A crowd measuring
            Application Programming Interface (API) is developed to present
            results of occupancy of public transits in future trips along with
            the stations to board and alight on, with time and route
            information. It also provides metadata such as transit agencies and
            popular route names. It takes three parameters as input: first
            origin place identity, second destination place identity and third
            departure time. The output of the API gives six alternatives
            computed on the cost function (described as disutility function) for
            any origin-destination pair and provides information about each
            alternative with respect to ‘arrival’, ‘transport mode’,
            ‘departure’, ‘transport mode’, and ‘sequence of stops’. The major
            objective of the mobile application is to convey the Disutility
            Index of each trip between the chosen boarding and destination
            locations. A user is required to enter the boarding point,
            destination and time of the departure in the app, which fetches and
            displays various alternatives to the users, differentiated in terms
            of crowding indices, transit routes, time of departure, among
            others. By selecting one of the alternatives, a user can visualize
            crowding on each segment of the selected route. With the aim of
            developing a simple and user-friendly mobile application, the User
            Interface (UI) of the app has been designed considering the
            demographics and utility so as to target a large audience. The app
            will allow all necessary information to be fetched with just a few
            clicks. Digital dynamic information boards were developed to
            re-establish the trust of the community in the public transportation
            systems. Installation of digital boards at PT stations for mass
            communication will increase the efficiency of travelling experience
            by providing current occupancy and predicted occupancy at the
            current station of all upcoming vehicles in the next 24 hours.
            Empowering decision-making of each commuter to choose the vehicle to
            board and thus ensuring comfort and public safety is the USP of the
            solution. To incorporate the real-time tracking of the passenger
            count inside a transit vehicle with the help of available CCTV
            footage, computer vision techniques have been utilized. Human
            detection is performed by using the MobileNet Single-Shot Detector
            (SSD) Caffe model of OpenCV. to track a person in the video file,
            the Centroid tracking algorithm of OpenCV has been used and based on
            it, an object identity is assigned to a person, as long as they are
            in the frame. If that person moves out of the frame, the object is
            de-registered. Finally the count of these identities are used to
            output the Live Person Count (LPC). In the final output, three
            parameters are displayed including LPS, Frames Per Second (FPS), and
            Overall Person Count (OPC).
            <br />
            <br />
            <strong>EXPECTED RESULTS AND OUTCOMES</strong>
            <br />
            Major highlights of the idea are:
            <br />
            • Prior occupancy information;
            <br />
            • Real-time transit vehicle information; and,
            <br />
            • Increased reliability.
            <br />
            For users, planning future trips is now easy, in terms of the
            possible alternatives depending on the different levels of occupancy
            in the transit vehicles during the departure. The available
            multi-modal information will empower the user to decide a PT mode
            and departure time of their choice. To empower the decision-making
            of users while planning their trips, a special disutility function
            has been coined and the cost function for the route has also been
            kept the same. Planned suggested routes will be an outcome of user
            preferences and requirements which can be configured easily in the
            application. The solution is a step towards making PT systems in
            Indian cities sustainable as well as reliable since it would
            facilitate real-time spatio-temporal locations as well as predicted
            crowding levels in the transit vehicles. It would also ensure equity
            in mobility as it would provide availability and occupancy
            information of women-only coaches, thus ensuring their safety.
            <br />
            <br />
            <strong>CONCLUSION</strong>
            <br />
            The benefit of using neural networks is that they allow us, with a
            single model, to be able to predict any of the bus lines in each one
            of the stops, without having to make a model or specialized
            algorithm for each one of the lines. This simplifies the complexity
            of implementation when it comes to production and also allows it to
            be easily applied in other cities, where lines and stops will be
            completely different. The solution provides a special uniqueness to
            stations of each city and thus provides a separate model to be
            trained for stations showing similar characteristics, which
            considers the personalization while considering the computational
            cost at the same time. The core algorithm is designed in a pluggable
            mode so that the same infrastructure can be used for different
            cities, provided the similar input datasets are available.
            Additionally, the application interface will be common to all
            residents and thus has no issue of scalability.
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2
              ref={winningRef3}
              style={{
                textAlign: "center",
                textDecoration: "underline",
                marginTop: "20px",
              }}
            >
              WINNING IDEA #3
            </h2>
          </div>
        </div>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-10 pt-3">
            <h3>
              Real-Time Public Transport Demand-Supply Gap Assessment Tool
            </h3>
            Mobility Team of Council on Energy, Environment and Water;
            CITYDATA.ai
          </div>
          <div className="col-10 pt-3">
            <strong>CONTEXT:</strong>
            <br />
            Indian cities have seen a precipitous fall in the modal share of
            buses over the past decade. Buses running on outdated schedules and
            routes are unable to adapt to the changing urban trends and mobility
            patterns. A host of other factors, including shrinking bus fleet
            size, congestion leading to poor service levels and an operating
            environment that is often completely uncoordinated, have contributed
            to this decline in Indian cities. A pan-India urban mobility survey
            found quality of infrastructure, frequency of service and lack of
            seamless travel to be the top barriers to using PT in Indian cities.
            The result is increasing private vehicle ownership, which further
            aggravates the issues faced by PT. This renders the PT system
            inequitable and disproportionately impacts communities in the lower
            socio-economic strata.
            <br />
            <br />
            <strong>PROBLEM STATEMENT:</strong>
            <br />
            Extensive city-level surveys are carried out to adapt PT services to
            mobility demand. Owing to the time and financial resources involved,
            these surveys are carried out once in seven to ten years, which is a
            very long timeframe for a dynamic system such as transportation. For
            example, Delhi conducted its last comprehensive survey for mobility
            patterns and transit in 2010 through RITES. Since then, all the
            transit and mobility planning has been based on it. Repeating such
            surveys can often be taxing and financially unviable. Moreover,
            mobility patterns vary daily, weekly, and seasonally which
            city-level surveys fail to capture in greater granularity.
            Additionally, the impacts of policy, regulatory, and infrastructure
            interventions, land use development, population, and
            projects-related impacts during last decade are not accurately
            considered. High-frequency data on mobility needs and trends offer
            promising solution. It informs decisions on augmenting or scaling
            back PT services, especially in the periphery of the system. We
            adopt a non-intrusive, data-powered analysis to help solve for
            improving the PT services and increasing its accessibility to users.
            The proposed solution will help to enable continuous monitoring of
            realtime gap in the demand and supply of bus services to adapt
            Indian cities.
            <br />
            <br />
            <strong>OBJECTIVE:</strong>
            <br />
            To develop a dynamic web-tool that can identify gap in demand and
            supply of bus services at three levels:
            <br />
            • Geographical accessibility;
            <br />
            • Adequate frequency for inter-ward movement of people; and,
            <br />
            • Bus connectivity and services at key land-uses.
            <br />
            The solution is in the form of a tool for operators to regularly
            fine-tune bus services to offer connected and easy travel
            experience, thereby improving ridership and revenues. The tool and
            its related analytics further support bus route rationalization and
            aids the development of demand responsive schedule for bus services.
            Also, the insights overlaid with land uses further supports the IPT,
            feeder services and metro service integration.
            <br />
            <br />
            <strong>APPROACH AND METHOD</strong>
            <br />
            The popularity of GPS tracking devices in city buses and smartphones
            in Indian cities allows for a rich and high frequency data
            collection. It can be put to use to identify the gap in demand and
            supply of bus services. For this solution, the GPS data from the
            buses act as the supplyside data. GPS data from smartphones of the
            residents of the city forms the demand-side data. These two datasets
            help identify the gap in demand and supply of bus services in the
            city, in a real-time and continuous manner. For the purpose of
            developing this solution, Delhi was chosen as a representative city
            owing to the availability of data with the team. The GPS data from
            buses is obtained from the Open Transit Data portal developed by
            IIIT Delhi in partnership with DIMTS and GNCTD (IIIT Delhi 2018).
            The smartphone GPS data was a proprietary data obtained from the
            data partner of the team – CITYDATA.ai, a California-based
            geo-analytics company. The web dashboard identifies the gap in
            demand and supply of bus services at the following three-levels:
            <br />
            <br />
            <strong>
              Adequate frequency of bus services for inter-ward movement of
              people
            </strong>
            <br />
            The bus GPS data and the smartphone GPS data is mapped to the
            designated wards. Interward matrices are constructed to compute the
            count of inter-ward bus movement and passenger movement. In order to
            establish the ideal passenger count in the buses, the load factor of
            85 percent was used on the seating capacity of the DIMTS buses to
            calculate the matrix with interward ideal passenger flow (GNCTD
            2019). Additionally, since the smartphone GPS data does not consider
            the complete population of Delhi, the Census 2011 ward-level
            population data was used to scale the people movement matrix. This
            can be further adjusted to Delhi Integrated Multi-Modal Transit
            System (DIMTS) survey 2020 or Census 2021 (subject to availability).
            In the last-step, the scaled passenger movement matrices and bus
            passenger flow matrices were compared to identify the underserved
            wards. These wards were divided into three categories and the
            results of the comparison are stored in a comparison matrix. The
            stages of solution development for the city of Delhi are indicated
            in the associated image.
            <br />
            <br />
            <strong>Geographical coverage of bus services</strong>
            <br />
            The city of Delhi is divided into wards and the bus stops were
            mapped to identify the wards without any bus stops. Using the
            smartphone GPS data, the Origins and Destinations (ODs) from these
            wards (with no bus stops) were calculated to identify the travel
            demand to and from these wards. In case of passenger trips are more
            than zero in these wards, the ward was marked as an ‘underserved
            ward’.
            <br />
            <br />
            <strong>Bus connectivity and services at key land-uses</strong>
            <br />
            The key land uses identified that needed adequate bus transport
            connectivity included markets, educational institutions and
            recreational areas. The dashboard calculates the number of bus stops
            in their 100 metre catchment area of the land uses, and the ones
            without any bus stops are marked as underserved areas. Upon closer
            inspection and detailed analysis, the tailored solutions can be
            developed such as enhanced area coverage with higher Level of
            Service using route rationalizing, optimization of frequency or
            headway of buses, matching trip schedules to demand, and planned,
            phased increment of buses to the fleet. Additionally, service gaps
            and other insights in specific areas, corridors may suggest need for
            different types of services like premium or seated buses, women
            special, university special, bazaar and mall links, to name a few.
            <br />
            <br />
            <strong>EXPECTED RESULTS AND OUTCOMES</strong>
            <br />
            The dynamic web dashboard will allow the city transit agency to
            monitor the gap in demand and supply of bus services. This can be
            done in real-time in a cost-effective manner, and tailored solutions
            can be adopted to increase ridership. The increased ridership
            directly benefits the bus operators, both by increasing their
            revenues and by bringing down operational costs through optimized
            bus operations. Further, it allows bus agencies to meticulously plan
            for acquiring new buses through comprehensive operations and
            financial planning, made possible by the availability of passenger
            movement data. The bus operators and transit agencies can
            continually measure the impact of the interventions to fine-tune
            operations to close gap in demand and supply of bus services. The
            key outcome of the proposed solution is about better and improved
            services. With adequate last-mile connectivity and integration of
            bus services with metro services in the city, buses will become an
            attractive and convenient mode of commute
            <br />
            <br />
            <strong>CONCLUSION</strong>
            <br />
            At present, about 71 percent of the city buses already have GPS
            devices, and 20 percent plan to install the devices in the next two
            years. Thus, the tool offers replication potential to 91 percent of
            all cities with bus systems. Owing to the popularity of the
            smartphones, the demand-side data is currently available for all
            Indian cities. Additionally, data from feeder buses, metro rail,
            auto-rickshaws, city-level surveys can also be integrated into the
            dashboard for supply-side insights. Similarly, call detail records,
            traffic surveys can be used for demand-side data. Thus, the solution
            is replicable and scalable to any city and context in the country.
            Prolonged supply of good quality PT services has the potential to
            cause mode-shift from private vehicles. This can lead to 57 percent
            reduction in vehicles on road, lowering congestion and local
            pollution. Additionally, transport-poor communities in the urban
            periphery, and other low-income areas will have improved access to
            PT and increase the prospects of enhanced livelihood and services
            such as education and health. Moreover, transit operators will
            benefit from improved ridership, revenues by efficient and
            demand-responsive services.
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2
              ref={specialRef1}
              style={{
                textAlign: "center",
                textDecoration: "underline",
                marginTop: "20px",
              }}
            >
              SPECIAL MENTION IDEA #1
            </h2>
          </div>
        </div>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-10 pt-3">
            <h3>EVERs Charging Platform</h3>
            Evers Technoservices LLP
          </div>
          <div className="col-10 pt-3">
            <strong>CONTEXT:</strong>
            <br />
            The EVERs concept initially targeted aggregation of Electric Vehicle
            (EV) charge points for the consumer to map all charging points that
            incudes private Charge Point Operators (CPO), public charging
            points, and semi-private charging points. There existed a gap where
            individual apps were created to cater to only the private CPO’s
            customer base. A platform with universal mapping and
            interoperability with various CPOs and public providers does not
            exist. Another key problem identified was the mapping of
            decentralized service providers such as individual or semi-private
            charging points, not having access to an aggregating network to list
            their charging point via an integrated platform. The current CPOs
            and their private management platforms lack uniform deployment of
            smart chargers, Energy Management System, tariff management and open
            charge point protocols.
            <br />
            <br />
            <strong>PROBLEM STATEMENT:</strong>
            <br />
            The current gaps in the Charging-as-a-Service (CaaS) model have been
            identified with both the Electric Mobility Service Providers (EMSPs)
            who manage the relationships with EV drivers and the CPOs who
            operate and manage the charging infrastructure. Presently, all EMSPs
            have independent applications to manage their respective users with
            payment, mapping of their own network and some other user features.
            There does not exist interoperability between the CPO networks and
            EMSPs. Most large CPOs operate independently without engaging
            multiple EMSPs. Furthermore, they do not have an integrated platform
            with open communication protocols with DISCOMs. All of the above
            limit effective EV-grid integration, improving the business model of
            charging service providers and increasing the EV penetration rate
            across the country.
            <br />
            <br />
            <strong>OBJECTIVE:</strong>
            <br />
            The objective of the EVERs charging platform is to promote the CaaS
            model, by developing a fully integrated platform that provides
            services to consumers as an EMSP via the consumer app that provides
            a universal mapping of all charge points, with key unique user
            features to enhance and enable EV users ease of access and
            hassle-free charging experience.
            <br />
            <br />
            <strong>APPROACH AND METHOD</strong>
            <br />
            The initial approach was to develop a universal EMSP application
            which would provide CaaS and as part of it, the EVERs user
            application was developed. The consumer app includes features like
            compatibility check, real-time mapping, real-time availability,
            shortest route to charging point, slot booking and QR Code
            authentication. The associated showcases the Home Page of the user
            screen, indicating charge point mapping with compatibility checks.
            The app allows the user to identify charging points compatible with
            their vehicle selection, and the “charge now” feature computes the
            closest available charging point. The associated image highlights
            some of the key features including real time feedback, slot booking
            and QR code enabled charge validation. The scope of the solution was
            then expanded to also have a CPO app to facilitate easy and
            efficient operations and management of charging points. A CPO
            application with a fully integrated back end was developed, paired
            with a CMS. The charging network registration on the CPO app allows
            for the CPOs or any individual service provider to register their
            EVSE with necessary details. The next image showcases the CPO app’s
            registration screen interface. The CPO app also allows dynamic
            tariff management, as a response to varying demand. Tariff
            management helps the CPOs to dynamically manage the tariffs based on
            user demand, as well as during peak energy demand cycles. The next
            image highlights the tariff management functionality of the
            application. The app also consists of a dashboard which is a
            consolidated platform to manage electric vehicle supply equipment.
            The dashboard has multiple tabs that provide key information, as
            well as access to energy and tariff management features. The
            operator can manage the entire infrastructure as well as monitor
            orders and sales revenues through the application using these
            features. The next image showcases the dashboard view
            <br />
            <br />
            <strong>EXPECTED RESULTS AND OUTCOMES</strong>
            <br />
            Some of the key expected results include uniform aggregation of
            users through the consumer application by providing unique user
            friendly features to enhance the EV charging experience. This,
            paired with a CPO application developed specifically to improve
            charging efficiencies both on the demand and energy side will enable
            to connect both users and service providers effectively. The common
            platform will help create a large decentralized network with better
            user penetration and the easily accessible CPO app will enable
            better integration of private and semipublic charging points to the
            network.
            <br />
            <br />
            <strong>CONCLUSION</strong>
            <br />
            The second aspect of the platform will be a CPO application paired
            along with a Central Management Software (CMS) to optimize tariff
            management, energy management with green power integration,
            micro-grid integration, and smart charging which is hardware
            agnostic. The entire platform is built with open communication
            protocols to engage multiple EMSPs, CPOs and DISCOMs to achieve
            interoperability and effective EV-grid integration. The EVERs
            charging platform will help to promote the transformation of
            mobility from integrated circuit-based automobiles to EV, by
            providing an end-to-end EV charging platform. This would enable
            effective user aggregation and charging point aggregation of both
            CPOs and independent charging points. By having users and service
            providers plugged into this open network, we can achieve effective
            connection of EV-grid integration, create and assess various models
            of EV charging, analyze charging demands and forecasts. A fully
            integrated platform will be able to connect all key stakeholders
            through an open communication protocol. This would have key benefits
            such as passive and active load management, micro grid integration,
            smart charging hardware integration with Open Charge Point Protocol
            and Open Automated Demand Response.
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <div className="row">
          <div className="col-12">
            <h2
              ref={specialRef2}
              style={{
                textAlign: "center",
                textDecoration: "underline",
                marginTop: "20px",
              }}
            >
              SPECIAL MENTION IDEA #2
            </h2>
          </div>
        </div>
        <div className="row" style={{ textAlign: "left" }}>
          <div className="col-10 pt-3">
            <h3>Here to There – Changing Perception through Communication</h3>
            Directorate of Urban Land Transport, Bengaluru
          </div>
          <div className="col-10 pt-3">
            <strong>CONTEXT:</strong>
            <br />
            The COVID-19 pandemic has challenged and affected various sectors of
            the economy and people in distinctive but myriad ways. Across the
            world, governments enforced massive restrictions in the form of
            lockdowns to limit the transmission of the virus to ensure the
            health and safety of its citizens. These restrictions such as
            limiting public transport for only essential workers, discouraging
            unnecessary travel, enforcing physical distancing norms, encouraging
            Work from Home (WFH), created startling and unforeseen effects on
            public transport and the travel behaviour of individuals. The Global
            Mass Transit Report - Ridership Plunge: Limited Services, Declining
            Patronage Due to COVID-19, 2020 presents convincing data on
            plummeting public transport ridership across the world. Further,
            studies have revealed that with the opening of lockdowns and
            increased vaccination rates, there is an increasing preference for
            the personal vehicle. Thus, it is evident that concerted measures
            need to be implemented to retain and increase the public transport
            mode share to achieve the goal of sustainable mobility
            <br />
            <br />
            <strong>PROBLEM STATEMENT:</strong>
            <br />
            Presently, public transport operators are grappling with reduced
            ridership mainly owing to two broad reasons: one, COVID-19
            associated restrictions such as physical distancing, discouraging
            unnecessary travel, etc. and two, the behavioural and attitudinal
            change of individuals due to the general myth that public transport
            is unsafe. Contrary to this general perception, there is extensive
            research showing that public transport poses a very low risk of
            transmitting COVID-19 and is a safe mode for commuting. However,
            this information is not convincingly conveyed to the general public
            in an effective manner. Even in normal times, the increasing number
            of personal vehicles in cities is leading to erosion of public
            transport’s modal share. Public Transport Operators need to use
            effective data-driven communication strategies to continuously
            obtain feedback on the perceptions of citizens on the quality of
            public transport infrastructure and services. These communication
            strategies need to clearly present that the public transport
            services are modern, efficient, rapid, reliable, convenient,
            comfortable, and safe. Such effective and targeted communication
            strategies have the potential to retain the existing public
            transport users, attract new users and also build support for public
            transport.
            <br />
            <br />
            <strong>OBJECTIVE:</strong>
            <br />
            Successful businesses continuously strive to understand the needs
            and perceptions of their customers about their products and/ or
            services. It is an established fact that it is far costlier to bring
            in new customers than to keep existing ones. However, public
            transport operators do not spend the required time and effort to
            continuously engage with their customers and may need to borrow
            strategies used by the private sector to develop a loyal commuter
            base. COMP^2aaS, Communication, and Messaging to Promote Public
            Transport as a Service, is a bouquet of tools to develop and
            implement communication and messaging strategies through a
            data-driven approach to
            <br />
            • Measure customer satisfaction levels with respect to public
            transport infrastructure and services,
            <br />
            • Engage with the larger community on the importance of Public
            Transport and
            <br />
            • Nudge citizens towards using public transport for their mobility
            needs.
            <br />
            <br />
            <strong>APPROACH AND METHOD</strong>
            <br />
            The solution aims to:
            <br />
            • Increase the inferential ability of the vast amount of data
            collected through the ITS system, especially the Automated Fare
            Collection System (AFCS) and Smart Card Ridership data, using the
            dashboard;
            <br />
            • Understand the needs, attitudes, biases, and perceptions of
            citizens towards public transport services in the city;
            <br />
            • Adopt effective communication strategies to address and tackle
            these concerns using the toolkit.
            <br />
            Currently, the approach has been tried and tested on data sources
            from Hubli-Dharwad Bus Rapid Transit System (HDBRTS), one of the
            successful BRTS projects in India. The solution ‘COMP2aaS’ uses a
            data-centric methodology to develop effective communication
            strategies to constantly engage with the existing, new, and
            potential customers, and thereby understand their mobility needs and
            build brand value. This is based on the looped process of “M.E.Nu.”
            where M is measure, E is Engage, Nu is Nudge.
            <br />
            <br />
            <strong>Measure</strong>
            <br />
            ‘Measure’ is a process of analysing two sources of data, ITS-sourced
            AFCS data sets (which include ridership and smart card-related data)
            and city-wide survey. The data reading process here involves
            quantitatively understanding the rise and fall in ridership level on
            a temporal (daily to annual) as well as spatial (station-wise) basis
            through the dashboard. This dashboard will visualise these data sets
            for the public transport operators to understand the ‘what, when,
            and where’ regarding the fluctuations in the ridership. The
            visualisation on these dashboards also enables the public transport
            operators to understand the customer behavioural pattern including
            churn, including the number of customers that defect (cease using) a
            service during a particular time frame. The second source of data is
            the city-wide survey, which gives a qualitative understanding of the
            change in the ridership and the reasons for churn. This survey
            dashboard helps understand the existing perception of the public
            transport service.
            <br />
            <br />
            <strong>Engage</strong>
            <br />
            Based on the insights gained from the dashboard of the HDBRTS, a
            toolkit has been developed. The next stage, ‘Engage’ involves using
            this toolkit for the formulation of communication strategies. This
            toolkit lists communication strategies that are bucketed into
            segments pertaining to physical infrastructure, information, or
            service-related issues which can be further disaggregated for
            different personas based on age, gender, or occupation. The public
            transport operators are required to develop communication material
            in the form of audio, video, posters, for different platforms such
            as Public Announcement System (PAS), Passenger Information System
            (PIS), social and traditional media.
            <br />
            <br />
            <strong>Nudge</strong>
            <br />
            Based on the issue-bucketing, the ‘Nudge’ process is where various
            strategies developed are rolled out on digital and traditional
            platforms to nudge the customers. This segment also involves nudging
            people for various reasons, including but not limited to- adopting
            appropriate commuter behavior (COVID and other etiquettes),
            promotion of smart card usage, retaining the existing customer and
            gaining new customers. The digital dashboard solution, supported by
            a toolkit, will enable public transport operators in reading,
            analyzing, and interpreting the data to facilitate communication
            strategy development.
            <br />
            <br />
            <strong>EXPECTED RESULTS AND OUTCOMES</strong>
            <br />
            For communication strategies, there can be no one-size-fits-all
            approach since the strategies need to be contextualized to the
            current challenges, as well as the general ethos and pathos of the
            city. Therefore, COMP2aaS enables public transport operators to
            collect and analyze data from various sources such as AFCS and
            survey. This dashboard will enable easy reading of data from
            different perspectives at the disaggregated level, and also
            understand the reason for continuously using or churning out from
            public transport. These conclusions, using the toolkit booklet, will
            then enable the public transport operator to develop a mix of
            digital as well as nondigital communication and messaging strategies
            for different platforms. COMP2aaS, therefore, is a yardstick that
            measures the effectiveness in reducing customer churn and increasing
            customer acquisition through communication and outreach strategies.
            <br />
            <br />
            <strong>CONCLUSION</strong>
            <br />
            Effective, targeted, and data-led communication strategies have the
            potential to retain the existing public transport users, attract new
            public transport users and thereby maintain the existing and
            generate new and increased ridership demand for public transport.
            Further, communication strategies, when executed effectively, can
            establish a connection with their users and thereby allow public
            transport operators to understand their users better. At a city
            scale, it will help operators to build support for public transport.
            This dashboard, along with the toolkit, is a plug-and-play solution
            that will enable any public transport operator to undertake
            effective communication strategies and also measure the impact of
            these strategies. Several BRTS’s in India (such as Indore and
            Ahmedabad) and even metro systems have invested heavily in the ITS
            system especially AFCS and Automatic Vehicle Location System.
            Therefore, the public transport operators will only require to
            connect their dataset using API. The COMP2aaS dashboard has been
            developed using the live dataset and tested on one of the most
            successful BRT - HDBRTS and therefore any other BRTS or metro can
            easily adopt this COMP2aaS and develop appropriate communication
            strategies.
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
    </section>
  );
};

export default Pilot;
