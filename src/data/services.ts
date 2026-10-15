export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  image: string;
  imageAlt: string;
  commonProblems: string[];
  serviceDescription: string;
  customerGuidance: string;
  faqs: { question: string; answer: string }[];
}

export const services: Service[] = [
  {
    slug: 'drain-cleaning',
    name: 'Drain Cleaning',
    shortDescription:
      'Professional drain cleaning to clear blockages and restore proper water flow throughout your plumbing system.',
    description:
      'Drain cleaning is the process of removing buildup, debris, and blockages from your plumbing drains to restore proper water flow. Boise Drain Service uses professional-grade equipment to address clogs in kitchen sinks, bathroom drains, floor drains, and main sewer lines.',
    icon: 'Droplets',
    image: 'https://images.pexels.com/photos/6419128/pexels-photo-6419128.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Plumber cleaning and installing drain pipes',
    commonProblems: [
      'Sinks that drain slowly or not at all',
      'Water backing up into sinks, tubs, or showers',
      'Gurgling sounds coming from drains',
      'Recurring clogs that keep coming back',
      'Multiple drains in the home backing up simultaneously',
      'Foul odors coming from drain openings',
    ],
    serviceDescription:
      'Our drain cleaning service involves a thorough assessment of your drainage system to identify the location and cause of the blockage. We use professional drain cleaning equipment including drain snakes and augers to break through and remove obstructions. For more stubborn blockages, we can discuss additional options such as hydro jetting or camera inspection to identify the root cause.',
    customerGuidance:
      'If you are experiencing slow drainage or repeated clogs, call Boise Drain Service to describe the issue. Be prepared to share which drains are affected, how long the problem has been occurring, and whether multiple drains are involved. This information helps us determine the appropriate approach for your situation.',
    faqs: [
      {
        question: 'How do I know if my drain needs professional cleaning?',
        answer:
          'If you have persistent slow drainage, recurring clogs, multiple backed-up drains, or unusual sounds and odors, it may be time to call a professional. Store-bought drain cleaners often provide only temporary relief and can damage pipes over time.',
      },
      {
        question: 'Can I use chemical drain cleaners instead?',
        answer:
          'Chemical drain cleaners can be harsh on your plumbing and may only provide a temporary fix. For recurring or stubborn clogs, professional drain cleaning addresses the underlying cause rather than just the symptoms.',
      },
      {
        question: 'How long does a typical drain cleaning take?',
        answer:
          'The time required depends on the severity and location of the blockage. Simple clogs may be resolved quickly, while more complex issues involving main drains or sewer lines may take longer. Call us to discuss your specific situation.',
      },
    ],
  },
  {
    slug: 'clogged-drain-repair',
    name: 'Clogged Drain Repair',
    shortDescription:
      'Targeted repair service for stubborn clogs that resist standard cleaning methods and keep recurring.',
    description:
      'Clogged drain repair goes beyond basic cleaning to address the underlying cause of persistent or recurring blockages. This may involve removing deep obstructions, repairing damaged pipe sections, or addressing root intrusion in sewer lines.',
    icon: 'Wrench',
    image: 'https://images.pexels.com/photos/16509869/pexels-photo-16509869.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker repairing pipes with professional tools',
    commonProblems: [
      'Drains that clog repeatedly after cleaning',
      'Water rising in toilets or backing up into tubs',
      'Sewage odors inside the home',
      'Wet spots or unusual lush growth in the yard',
      'Gurgling noises from multiple fixtures',
      'Water draining from one fixture and appearing in another',
    ],
    serviceDescription:
      'Our clogged drain repair service begins with identifying the nature and location of the obstruction. We use drain snakes, augers, and when needed, camera inspection equipment to locate the problem. Once identified, we can clear the blockage and, if necessary, discuss repair options for any damaged or compromised pipe sections.',
    customerGuidance:
      'When calling about a clogged drain, let us know which drains are affected, how often the clog recurs, and whether you have noticed any unusual sounds, odors, or water in unexpected places. This helps us assess whether a simple cleaning or a more involved repair may be needed.',
    faqs: [
      {
        question: 'What causes recurring drain clogs?',
        answer:
          'Recurring clogs can be caused by buildup of grease, hair, soap scum, or food particles over time. They can also result from deeper issues like pipe damage, tree root intrusion, or misaligned pipes. A professional inspection can help identify the underlying cause.',
      },
      {
        question: 'Will clogged drain repair damage my pipes?',
        answer:
          'Professional drain repair uses equipment designed to clear blockages without damaging your plumbing. We assess the condition of your pipes before selecting the appropriate method.',
      },
      {
        question: 'How is clogged drain repair different from drain cleaning?',
        answer:
          'Drain cleaning addresses surface-level blockages to restore flow, while clogged drain repair targets the underlying cause of persistent or recurring clogs, which may involve pipe damage or deep obstructions that require more advanced techniques.',
      },
    ],
  },
  {
    slug: 'main-drain-cleaning',
    name: 'Main Drain Cleaning',
    shortDescription:
      'Clearing and cleaning of the main drain line that connects your home to the municipal sewer system.',
    description:
      'Main drain cleaning addresses blockages in the primary sewer line that carries all wastewater from your home to the city sewer connection. A main drain clog can affect every fixture in your home and requires specialized equipment to resolve.',
    icon: 'GitBranch',
    image: 'https://images.pexels.com/photos/37627673/pexels-photo-37627673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Drainage pipe installation in a trench',
    commonProblems: [
      'Multiple drains backing up at the same time',
      'Water backing up into the lowest fixture in the home',
      'Gurgling sounds from toilets when using other fixtures',
      'Sewage odors inside or outside the home',
      'Slow drainage throughout the entire house',
      'Water pooling around floor drains',
    ],
    serviceDescription:
      'Main drain cleaning involves using heavy-duty drain cleaning equipment, including power augers and drain snakes, to reach deep into your main sewer line and clear obstructions. We can also discuss camera inspection to visually inspect the interior of the main drain line if the blockage is difficult to locate or if recurring problems suggest a structural issue.',
    customerGuidance:
      'If you suspect a main drain issue, call us right away and describe which fixtures are affected. Main drain clogs can worsen quickly, so providing details about the extent of the backup helps us prepare the right equipment for your situation.',
    faqs: [
      {
        question: 'What causes a main drain clog?',
        answer:
          'Common causes include tree root intrusion, accumulation of grease and debris, foreign objects in the line, pipe damage or collapse, and aging sewer pipes. A camera inspection can help identify the specific cause.',
      },
      {
        question: 'How do I know if my main drain is clogged?',
        answer:
          'Signs of a main drain clog include multiple fixtures backing up simultaneously, water rising in the lowest drain in your home, and gurgling sounds from toilets when other fixtures are used. If you notice these symptoms, call a professional promptly.',
      },
      {
        question: 'Can main drain clogs be prevented?',
        answer:
          'Regular maintenance, avoiding putting grease or foreign objects down drains, and periodic camera inspections can help identify potential issues before they become major blockages. Call us to discuss preventive options for your home.',
      },
    ],
  },
  {
    slug: 'sewer-line-cleaning',
    name: 'Sewer Line Cleaning',
    shortDescription:
      'Professional cleaning of sewer lines to remove buildup, roots, and debris that cause persistent backups.',
    description:
      'Sewer line cleaning targets the underground pipe that carries wastewater from your property to the municipal sewer system. Over time, sewer lines can accumulate grease, debris, mineral scale, and tree roots that restrict flow and cause backups.',
    icon: 'ArrowDownToLine',
    image: 'https://images.pexels.com/photos/29274530/pexels-photo-29274530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Urban pipe installation at a construction site',
    commonProblems: [
      'Sewage backups into the home',
      'Foul odors from drains or the yard',
      'Slow drainage throughout the entire property',
      'Unusually lush or wet patches in the yard',
      'Gurgling sounds from plumbing fixtures',
      'Frequent need for drain cleaning throughout the home',
    ],
    serviceDescription:
      'Our sewer line cleaning service uses professional equipment to clear obstructions in your sewer line. Depending on the nature of the blockage, we may use mechanical augers, drain snakes, or discuss hydro jetting for thorough cleaning. Camera inspection is available to visually assess the condition of the sewer line and identify any structural issues.',
    customerGuidance:
      'When calling about sewer line issues, describe the symptoms you are experiencing, how long they have been occurring, and whether the problem affects the entire home or specific fixtures. If you have had previous sewer line work done, let us know so we can take that into account.',
    faqs: [
      {
        question: 'How often should sewer lines be cleaned?',
        answer:
          'The frequency of sewer line cleaning depends on factors such as the age of your pipes, tree proximity, and usage patterns. Homes with older pipes or trees near the sewer line may benefit from more frequent cleaning. Call us to discuss your specific situation.',
      },
      {
        question: 'What is the difference between sewer line cleaning and main drain cleaning?',
        answer:
          'Sewer line cleaning and main drain cleaning address similar issues but may focus on different sections of the waste pipe system. Both target the large-diameter pipes that carry wastewater from your home to the municipal connection.',
      },
      {
        question: 'Can tree roots grow into sewer lines?',
        answer:
          'Yes, tree roots can penetrate sewer line joints and cracks seeking moisture and nutrients. Over time, they can cause significant blockages. Professional cleaning and, in some cases, camera inspection can help identify and address root intrusion.',
      },
    ],
  },
  {
    slug: 'sewer-line-repair',
    name: 'Sewer Line Repair',
    shortDescription:
      'Repair of damaged or deteriorated sewer lines to restore proper wastewater flow and prevent future problems.',
    description:
      'Sewer line repair addresses structural damage to your sewer pipe, including cracks, collapses, root intrusion points, and deteriorated sections. Repair may involve replacing damaged pipe sections or addressing joints and connections that have failed.',
    icon: 'Construction',
    image: 'https://images.pexels.com/photos/27354191/pexels-photo-27354191.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker repairing pipe in an urban trench',
    commonProblems: [
      'Persistent sewage backups after cleaning',
      'Wet or sunken areas in the yard',
      'Cracks in the foundation near the sewer line',
      'Sewage odors that persist after cleaning',
      'Slow drainage that does not improve with cleaning',
      'Unusually green or lush patches in the yard',
    ],
    serviceDescription:
      'Our sewer line repair service begins with a camera inspection to visually assess the interior of the sewer pipe and identify the location and nature of the damage. Based on the findings, we discuss the appropriate repair approach, which may involve replacing damaged sections, sealing joints, or addressing root intrusion points.',
    customerGuidance:
      'If you are experiencing persistent sewer problems that do not resolve with cleaning, call us to discuss whether a camera inspection and repair may be needed. Describe the history of the problem, including any previous cleaning or repair work that has been done.',
    faqs: [
      {
        question: 'How do I know if my sewer line needs repair rather than cleaning?',
        answer:
          'If you experience recurring backups, persistent odors, or drainage issues that do not improve with cleaning, your sewer line may have structural damage. A camera inspection can confirm whether repair is necessary.',
      },
      {
        question: 'How long does a sewer line repair take?',
        answer:
          'The duration depends on the extent of the damage, the location of the affected section, and the repair method used. Call us to discuss your specific situation for a better understanding of what to expect.',
      },
      {
        question: 'Can sewer line damage be prevented?',
        answer:
          'Regular inspections, avoiding planting trees near sewer lines, and addressing minor issues before they worsen can help prevent major sewer line damage. Periodic camera inspections can catch problems early.',
      },
    ],
  },
  {
    slug: 'drain-camera-inspection',
    name: 'Drain Camera Inspection',
    shortDescription:
      'Visual inspection of drain and sewer lines using specialized cameras to pinpoint problems without guesswork.',
    description:
      'Drain camera inspection uses a waterproof, high-resolution camera attached to a flexible cable to visually inspect the interior of your drain and sewer pipes. This allows us to identify cracks, blockages, root intrusion, and other issues without excavation.',
    icon: 'Camera',
    image: 'https://images.pexels.com/photos/16442684/pexels-photo-16442684.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Engineer inspecting industrial piping system',
    commonProblems: [
      'Recurring drain clogs with no clear cause',
      'Sewage odors with no visible source',
      'Slow drainage that persists after cleaning',
      'Suspected pipe damage or collapse',
      'Home purchase inspections revealing drainage concerns',
      'Persistent wet spots in the yard',
    ],
    serviceDescription:
      'Our drain camera inspection service involves inserting a specialized waterproof camera into your drain or sewer line. The camera transmits real-time video to a monitor, allowing us to visually assess the condition of the pipe interior. We can identify the exact location and nature of any issues, including cracks, root intrusion, buildup, and pipe misalignment.',
    customerGuidance:
      'If you are experiencing recurring or unexplained drainage problems, a camera inspection can provide answers. When calling, describe the symptoms, how long they have been occurring, and whether previous cleaning or repair work has been done.',
    faqs: [
      {
        question: 'Is a drain camera inspection invasive?',
        answer:
          'No, camera inspection is non-invasive. The camera is inserted through existing access points such as cleanouts, so there is no need for digging or disruption to your property.',
      },
      {
        question: 'When should I request a camera inspection?',
        answer:
          'Camera inspection is recommended when you have recurring clogs, persistent odors, suspected pipe damage, or are purchasing a home and want to verify the condition of the sewer line.',
      },
      {
        question: 'Can a camera inspection find the exact location of a problem?',
        answer:
          'Yes, the camera is equipped with a transmitter that allows us to pinpoint the exact location and depth of any issue, which helps determine the most appropriate repair approach.',
      },
    ],
  },
  {
    slug: 'hydro-jetting',
    name: 'Hydro Jetting',
    shortDescription:
      'High-pressure water jetting to thoroughly clean drain and sewer lines, removing stubborn buildup and debris.',
    description:
      'Hydro jetting uses highly pressurized water to scour the interior of drain and sewer pipes, removing grease, scale, debris, and even tree roots. This method provides a more thorough cleaning than mechanical snaking alone.',
    icon: 'Gauge',
    image: 'https://images.pexels.com/photos/29994840/pexels-photo-29994840.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Worker using high-pressure hose for cleaning',
    commonProblems: [
      'Grease buildup in kitchen drain lines',
      'Mineral scale accumulation in older pipes',
      'Tree root intrusion in sewer lines',
      'Recurring clogs after standard cleaning',
      'Slow drainage throughout the plumbing system',
      'Debris accumulation in long sewer runs',
    ],
    serviceDescription:
      'Our hydro jetting service uses a specialized nozzle that directs high-pressure water streams in multiple directions to scour the interior walls of your pipes. This removes buildup that mechanical snakes cannot reach, including hardened grease, mineral deposits, and small root intrusions. Hydro jetting is typically used in conjunction with camera inspection to verify results.',
    customerGuidance:
      'If you have recurring clogs or suspect significant buildup in your drain lines, call us to discuss whether hydro jetting may be appropriate. We can assess your situation and recommend the best approach based on the condition of your pipes.',
    faqs: [
      {
        question: 'Is hydro jetting safe for all pipes?',
        answer:
          'Hydro jetting is safe for most modern pipes, but older or damaged pipes may require a preliminary camera inspection to ensure they can withstand the pressure. We assess pipe condition before recommending hydro jetting.',
      },
      {
        question: 'How is hydro jetting different from drain snaking?',
        answer:
          'Drain snaking uses a mechanical cable to break through blockages, while hydro jetting uses pressurized water to scour the entire interior of the pipe. Hydro jetting provides a more thorough clean and can remove buildup that snaking leaves behind.',
      },
      {
        question: 'How often should hydro jetting be done?',
        answer:
          'The frequency depends on your usage patterns and pipe condition. Homes with heavy kitchen use or older pipes may benefit from more frequent hydro jetting. Call us to discuss a maintenance schedule for your situation.',
      },
    ],
  },
  {
    slug: 'kitchen-drain-cleaning',
    name: 'Kitchen Drain Cleaning',
    shortDescription:
      'Specialized cleaning of kitchen sink drains to remove grease, food debris, and soap buildup.',
    description:
      'Kitchen drain cleaning targets the unique types of blockages that occur in kitchen sinks, including grease buildup, food particles, and soap scum. Kitchen drains are particularly prone to clogs from cooking oils and food waste that accumulate over time.',
    icon: 'CookingPot',
    image: 'https://images.pexels.com/photos/3847573/pexels-photo-3847573.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Kitchen sink with faucet',
    commonProblems: [
      'Water draining slowly from the kitchen sink',
      'Garbage disposal not draining properly',
      'Gurgling sounds from the kitchen drain',
      'Foul odors from the kitchen sink',
      'Water backing up into the kitchen sink',
      'Food particles visible in standing water',
    ],
    serviceDescription:
      'Our kitchen drain cleaning service uses professional drain snakes and augers designed for kitchen plumbing to clear grease, food, and debris blockages. We can also discuss preventive measures to reduce future buildup, such as proper disposal practices and maintenance cleaning schedules.',
    customerGuidance:
      'When calling about a kitchen drain problem, let us know whether you have a garbage disposal, how long the problem has been occurring, and whether the clog affects only the kitchen sink or other drains as well.',
    faqs: [
      {
        question: 'What should I avoid putting down my kitchen drain?',
        answer:
          'Avoid putting grease, oil, coffee grounds, eggshells, pasta, rice, and fibrous foods down your kitchen drain, as these can accumulate and cause clogs. Even with a garbage disposal, these items can build up over time.',
      },
      {
        question: 'Can I clean my kitchen drain myself?',
        answer:
          'For minor clogs, a plunger or drain snake may help. However, if the clog persists or recurs, professional cleaning can address the buildup more thoroughly and help prevent future problems.',
      },
      {
        question: 'Why does my kitchen drain smell?',
        answer:
          'Odors from kitchen drains are often caused by decomposing food particles or grease buildup in the pipes. Professional cleaning can remove the source of the odor and restore proper drainage.',
      },
    ],
  },
  {
    slug: 'bathroom-drain-cleaning',
    name: 'Bathroom Drain Cleaning',
    shortDescription:
      'Clearing of bathroom sink, tub, and shower drains clogged with hair, soap, and personal care products.',
    description:
      'Bathroom drain cleaning addresses blockages in sinks, bathtubs, and showers caused by hair, soap scum, toothpaste, and personal care product buildup. Bathroom drains are among the most commonly clogged fixtures in any home.',
    icon: 'ShowerHead',
    image: 'https://images.pexels.com/photos/31213992/pexels-photo-31213992.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Water flowing from a faucet into a bathroom sink',
    commonProblems: [
      'Slow-draining bathroom sinks',
      'Water pooling in the shower or tub',
      'Hair visible in the drain opening',
      'Gurgling sounds from bathroom drains',
      'Odors coming from bathroom sinks or tubs',
      'Water backing up when using another fixture',
    ],
    serviceDescription:
      'Our bathroom drain cleaning service uses specialized tools to remove hair, soap scum, and debris from bathroom sink, tub, and shower drains. We can address both surface-level clogs near the drain opening and deeper blockages in the trap and drain line.',
    customerGuidance:
      'When calling about a bathroom drain issue, let us know which fixture is affected (sink, tub, or shower), how long the problem has been occurring, and whether multiple bathroom drains are involved.',
    faqs: [
      {
        question: 'How can I prevent bathroom drain clogs?',
        answer:
          'Using drain screens to catch hair, avoiding letting soap and toothpaste buildup go down the drain, and periodically flushing drains with hot water can help reduce clogs. Regular professional cleaning can also prevent buildup from becoming a blockage.',
      },
      {
        question: 'Why does my shower drain keep clogging?',
        answer:
          'Shower drains frequently clog due to hair and soap scum accumulation. If the clog recurs after cleaning, there may be a deeper buildup in the drain line that requires professional attention.',
      },
      {
        question: 'Can I use a plunger on my bathroom sink?',
        answer:
          'Yes, a plunger can help clear minor bathroom sink clogs. If the clog persists after plunging, or if multiple bathroom drains are slow, professional cleaning may be needed to address a deeper blockage.',
      },
    ],
  },
  {
    slug: 'floor-drain-cleaning',
    name: 'Floor Drain Cleaning',
    shortDescription:
      'Cleaning and clearing of floor drains in basements, garages, and utility areas to prevent flooding.',
    description:
      'Floor drain cleaning addresses blockages in floor drains commonly found in basements, laundry rooms, garages, and utility areas. These drains can become clogged with dirt, debris, sediment, and buildup, preventing them from functioning when you need them most.',
    icon: 'Waves',
    image: 'https://images.pexels.com/photos/3964796/pexels-photo-3964796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    imageAlt: 'Metal drain pipe on a concrete wall',
    commonProblems: [
      'Water pooling around floor drains',
      'Sewer odors coming from floor drains',
      'Floor drains that do not accept water',
      'Debris or sediment visible in the drain',
      'Water backing up through floor drains',
      'Damp or wet basement floors near drains',
    ],
    serviceDescription:
      'Our floor drain cleaning service clears blockages in floor drains using professional drain snakes and augers. We remove dirt, sediment, and debris that can prevent floor drains from functioning properly. We can also discuss maintenance to keep floor drains ready to handle water when needed.',
    customerGuidance:
      'When calling about a floor drain issue, let us know where the drain is located (basement, garage, laundry room), whether it is completely blocked or draining slowly, and whether you have noticed any odors or water backup.',
    faqs: [
      {
        question: 'Why does my floor drain smell?',
        answer:
          'Floor drains have a trap that should hold water to prevent sewer gases from entering. If the trap dries out, odors can rise. Pouring water down the drain periodically can help. If odors persist, there may be a buildup or blockage that needs professional attention.',
      },
      {
        question: 'How can I keep my floor drains clear?',
        answer:
          'Keep the area around floor drains free of debris, periodically flush them with water, and consider having them professionally cleaned if they become slow or emit odors. Regular maintenance helps ensure they function when needed.',
      },
      {
        question: 'Can a clogged floor drain cause flooding?',
        answer:
          'Yes, if a floor drain is clogged and water enters the area (from a water heater leak, washing machine overflow, or groundwater), it cannot drain away properly. Keeping floor drains clear is important for preventing water damage.',
      },
    ],
  },
];
