import React, { useState, useEffect } from 'react';
import TextbookLayout from '../../../components/TextbookLayout';
import ChapterContent from '../../../components/ChapterContent';

// Define all chapters with their content
const chaptersData = [
  {
    id: 1,
    title: 'Chapter 1: Overview and History',
    sections: [
      {
        id: '1.1',
        title: 'Overview',
        content: `Physical AI ( fizikal ai ) is an interdisciplinary field that combines artificial intelligence with physical systems. It focuses on creating intelligent machines that can understand, interact with, and adapt to the physical world.

Step-by-step understanding:
1. Perception - Gathering information about the environment
2. Cognition - Processing information to understand and reason
3. Action - Executing movements or tasks in the physical world

Physical AI systems typically integrate sensors, actuators, and intelligent control algorithms to achieve their goals.`
      },
      {
        id: '1.2',
        title: 'History',
        content: `The field of Physical AI has evolved significantly since the early days of robotics. Key developments include:

- 1950s: First programmable robots
- 1960s: Introduction of sensor feedback systems
- 1980s: Development of autonomous robots
- 2000s: Integration of machine learning in robotics
- 2010s: Advancement in humanoid robots and AI integration`
      }
    ]
  },
  {
    id: 2,
    title: 'Chapter 2: Foundations of Physical AI',
    sections: [
      {
        id: '2.1',
        title: 'Introduction',
        content: `The foundations of Physical AI encompass the core principles that govern how intelligent systems interact with the physical world. These foundations include:

1. Embodied Cognition: The idea that intelligence emerges from the interaction between an agent and its environment
2. Sensorimotor Integration: The seamless combination of sensory input and motor output
3. Adaptive Control: The ability to adjust behavior based on environmental feedback

These principles distinguish Physical AI from traditional AI, which primarily operates in digital domains.`
      }
    ]
  },
  {
    id: 3,
    title: 'Chapter 3: Sensors in Robotics',
    sections: [
      {
        id: '3.1',
        title: 'Sensor Types',
        content: `Sensors in robotics are critical components that allow robots to perceive their environment and internal states. The main categories include:

- Proprioceptive sensors: Measure internal states like joint angles and motor position
- Exteroceptive sensors: Perceive external environment, such as cameras for vision and microphones for sound
- Force/torque sensors: Measure interaction forces with objects and environment

Common sensor types:
1. Cameras and vision systems
2. Accelerometers and gyroscopes
3. Force and tactile sensors
4. Range finders (LiDAR, ultrasonic, infrared)`
      }
    ]
  },
  {
    id: 4,
    title: 'Chapter 4: Actuators in Robotics',
    sections: [
      {
        id: '4.1',
        title: 'Actuator Types',
        content: `Actuators are components that enable robots to move and interact with their environment. They are essentially the "muscles" of a robot, converting energy (usually electrical) into mechanical motion.

Main actuator types:
1. Electric motors: Most common in humanoid robots due to precision and controllability
2. Servo motors: Provide precise angular control for joint movements
3. Linear actuators: Create straight-line motion for specific applications
4. Pneumatic and hydraulic actuators: Provide high power-to-weight ratios but require external systems`
      }
    ]
  },
  {
    id: 5,
    title: 'Chapter 5: Control Systems for Robotics',
    sections: [
      {
        id: '5.1',
        title: 'Control Theory',
        content: `Control systems in robotics govern how robots execute movements and maintain stability. Key concepts include:

- Feedback control: Using sensor data to adjust system behavior
- PID controllers: Proportional-Integral-Derivative controllers for precise control
- State estimation: Determining the system's internal state from sensor data
- Trajectory tracking: Following predefined paths with accuracy

Advanced control methods include adaptive control, which adjusts to system changes, and optimal control, which minimizes specific cost functions.`
      }
    ]
  },
  {
    id: 6,
    title: 'Chapter 6: Machine Learning for Robotics',
    sections: [
      {
        id: '6.1',
        title: 'ML for Robotics',
        content: `Machine learning in robotics enables systems to improve performance through experience. Key applications include:

- Learning from demonstration: Teaching robots tasks through human examples
- Reinforcement learning: Learning optimal behaviors through reward signals
- Imitation learning: Replicating expert behaviors
- Deep learning: Processing complex sensor data like images and point clouds

Challenges include sample efficiency, safety during learning, and real-time inference requirements.`
      }
    ]
  },
  {
    id: 7,
    title: 'Chapter 7: Computer Vision in Robotics',
    sections: [
      {
        id: '7.1',
        title: 'Vision Systems',
        content: `Computer vision in robotics enables perception of the 3D world through visual sensors. Key capabilities include:

- Object detection and recognition
- Scene understanding
- Visual SLAM (Simultaneous Localization and Mapping)
- Pose estimation for manipulation tasks

Common techniques include convolutional neural networks (CNNs) for recognition, and geometric methods for 3D reconstruction.`
      }
    ]
  },
  {
    id: 8,
    title: 'Chapter 8: Natural Language Processing in Robotics',
    sections: [
      {
        id: '8.1',
        title: 'NLP in Robotics',
        content: `Natural Language Processing enables robots to understand and respond to human language. Key components:

- Speech recognition: Converting spoken language to text
- Natural language understanding: Extracting meaning from text
- Dialogue management: Maintaining coherent conversations
- Natural language generation: Producing appropriate responses

Applications include command and control, collaborative task execution, and social interaction.`
      }
    ]
  },
  {
    id: 9,
    title: 'Chapter 9: Motion Planning',
    sections: [
      {
        id: '9.1',
        title: 'Motion Planning Algorithms',
        content: `Motion planning involves determining a sequence of movements to achieve a goal while avoiding obstacles. Key approaches include:

- Sampling-based planners: RRT, RRT*, PRM for high-dimensional spaces
- Optimization-based planners: Trajectory optimization for smooth motions
- Search-based planners: A* and Dijkstra for discrete environments
- Learning-based planners: Using neural networks to plan in complex environments

Considerations include completeness, optimality, and real-time performance.`
      }
    ]
  },
  {
    id: 10,
    title: 'Chapter 10: Path Planning',
    sections: [
      {
        id: '10.1',
        title: 'Path Planning Algorithms',
        content: `Path planning focuses on determining geometric routes from start to goal positions. Key methods include:

- Grid-based algorithms: A*, Dijkstra's algorithm on discretized environments
- Visibility graphs: Connecting start, goal, and obstacle vertices
- Voronoi diagrams: Paths through open space corridors
- Probabilistic roadmaps: Precomputed roadmaps in configuration space

Modern approaches combine multiple methods and incorporate dynamic obstacle prediction.`
      }
    ]
  },
  {
    id: 11,
    title: 'Chapter 11: Human-Robot Interaction',
    sections: [
      {
        id: '11.1',
        title: 'HRI Principles',
        content: `Human-Robot Interaction (HRI) focuses on designing robots that can effectively collaborate with humans. Core principles include:

- Transparency: Robots clearly communicating their intentions and state
- Trust: Building reliable and predictable interaction
- Safety: Ensuring human safety during interaction
- Intuitive interfaces: Matching human expectations and capabilities

Key research areas include social robotics, collaborative robots (cobots), and assistive robotics.`
      }
    ]
  },
  {
    id: 12,
    title: 'Chapter 12: Robotics Software Frameworks',
    sections: [
      {
        id: '12.1',
        title: 'Robotics Frameworks',
        content: `Robotics software frameworks provide standardized tools and libraries for developing robotic applications. Popular frameworks include:

- ROS (Robot Operating System): The most widely used framework with extensive community support
- ROS2: The next generation with improved architecture and real-time capabilities
- YARP: Yet Another Robot Platform, emphasizing portability and simplicity
- Actin: Commercial framework with advanced kinematics and dynamics

These frameworks provide communication, device abstraction, simulation, and visualization tools.`
      }
    ]
  },
  {
    id: 13,
    title: 'Chapter 13: Robotics Hardware Components',
    sections: [
      {
        id: '13.1',
        title: 'Robotics Hardware Components',
        content: `Modern robots utilize diverse hardware components to achieve their capabilities:

- Computing platforms: GPUs, embedded systems, and specialized AI chips
- Power systems: Batteries, power management, and energy efficiency
- Mechanical components: Chassis, joints, and structural elements
- Sensors and actuators: As previously discussed in detail

The choice of components balances performance, cost, weight, and reliability requirements.`
      }
    ]
  },
  {
    id: 14,
    title: 'Chapter 14: Manufacturing and Industrial Robotics',
    sections: [
      {
        id: '14.1',
        title: 'Industrial Robotics',
        content: `Industrial robotics encompasses automated systems for manufacturing processes. Key applications include:

- Assembly: Precise and repeatable assembly of components
- Material handling: Automated transport and positioning of materials
- Welding: Consistent and high-quality joining of materials
- Painting: Uniform coating application with minimal waste

Modern industrial robots incorporate advanced vision, force control, and collaborative features.`
      }
    ]
  },
  {
    id: 15,
    title: 'Chapter 15: Healthcare and Medical Robotics',
    sections: [
      {
        id: '15.1',
        title: 'Medical Robotics',
        content: `Medical robotics applies robotic technologies to healthcare applications with strict safety requirements. Key areas include:

- Surgical robots: Enhancing precision in minimally invasive procedures
- Rehabilitation robots: Assisting in patient recovery and therapy
- Diagnostic robots: Automated screening and monitoring systems
- Assistive robots: Supporting elderly and disabled individuals

These systems require extensive safety validation and regulatory approval.`
      }
    ]
  },
  {
    id: 16,
    title: 'Chapter 16: Agricultural Robotics',
    sections: [
      {
        id: '16.1',
        title: 'Agricultural Robotics',
        content: `Agricultural robotics addresses labor shortages and improves farming efficiency. Applications include:

- Autonomous tractors and harvesters: Automated field operations
- Precision agriculture: Targeted application of resources
- Crop monitoring: Continuous surveillance and data collection
- Harvesting robots: Automated picking and collection of crops

These systems often operate in unstructured outdoor environments.`
      }
    ]
  },
  {
    id: 17,
    title: 'Chapter 17: Autonomous Vehicles',
    sections: [
      {
        id: '17.1',
        title: 'Autonomous Vehicles',
        content: `Autonomous vehicles represent a significant application of robotics and AI. Key technologies include:

- Perception systems: LiDAR, cameras, and radar for environment sensing
- Localization: Precise positioning using GPS, IMU, and map matching
- Path planning: Route computation and dynamic obstacle avoidance
- Control systems: Smooth and safe vehicle operation

Levels range from driver assistance (L1) to full automation (L5).`
      }
    ]
  },
  {
    id: 18,
    title: 'Chapter 18: AI Safety and Ethics',
    sections: [
      {
        id: '18.1',
        title: 'AI Safety Considerations',
        content: `AI safety in robotics addresses ensuring systems behave as intended, especially in safety-critical applications. Key areas include:

- Verification and validation: Proving system safety properties
- Safe exploration: Learning without causing harm
- Human oversight: Maintaining human control in critical situations
- Transparency and explainability: Understanding AI decision-making

Ethical considerations include privacy, job displacement, and autonomous weapons.`
      }
    ]
  },
  {
    id: 19,
    title: 'Chapter 19: Future of Robotics',
    sections: [
      {
        id: '19.1',
        title: 'Future Trends',
        content: `The future of robotics includes several promising directions:

- Humanoid robots: More capable and dexterous human-like robots
- Swarms: Coordinated groups of simple robots
- Soft robotics: Robots with compliant and adaptable bodies
- Biohybrid systems: Integration of biological and artificial components

These developments will likely increase robot capabilities and applications.`
      }
    ]
  },
  {
    id: 20,
    title: 'Chapter 20: Conclusion',
    sections: [
      {
        id: '20.1',
        title: 'Conclusion',
        content: `Physical AI and humanoid robotics represent a convergence of multiple disciplines to create intelligent machines that can interact with the physical world. Key takeaways include:

- The importance of embodiment in creating robust artificial intelligence
- The complex interplay of perception, cognition, and action
- The multidisciplinary nature requiring expertise in AI, mechanical engineering, electrical engineering, and control systems
- The vast potential applications across numerous domains

Future progress will depend on advances in materials, computing, and AI algorithms.`
      }
    ]
  }
];

const getChapterById = (id) => {
  return chaptersData.find(chapter => chapter.id === parseInt(id));
};

const getPrevNextChapters = (id) => {
  const currentIdx = chaptersData.findIndex(chapter => chapter.id === parseInt(id));
  return {
    prev: currentIdx > 0 ? chaptersData[currentIdx - 1] : null,
    next: currentIdx < chaptersData.length - 1 ? chaptersData[currentIdx + 1] : null
  };
};

const ChapterPage = ({ id }) => {
  const [chapter, setChapter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prevChapter, setPrevChapter] = useState(null);
  const [nextChapter, setNextChapter] = useState(null);

  useEffect(() => {
    const foundChapter = getChapterById(id);
    const { prev, next } = getPrevNextChapters(id);

    setChapter(foundChapter);
    setPrevChapter(prev);
    setNextChapter(next);

    setLoading(false);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-[#332a52] text-white shadow-md">
          <div className="container mx-auto px-4 py-4">
            <h1 className="text-xl md:text-2xl font-bold">Physical AI & Humanoid Robotics</h1>
          </div>
        </header>

        <div className="container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
          <div className="lg:w-3/12">
            <div className="bg-white rounded-lg shadow p-4 h-full overflow-y-auto">
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#332a52]"></div>
              </div>
            </div>
          </div>

          <div className="lg:w-9/12">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="animate-pulse">
                <div className="h-8 bg-gray-200 rounded w-3/4 mb-6"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6 mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!chapter) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Chapter Not Found</h1>
          <p className="text-gray-600 mb-4">The chapter you're looking for doesn't exist.</p>
          <a href="/textbook/chapter/1" className="px-4 py-2 bg-[#332a52] text-white rounded-lg hover:bg-[#4f46e5] transition-colors">
            Go to Chapter 1
          </a>
        </div>
      </div>
    );
  }

  return (
    <TextbookLayout currentChapter={chapter} prevChapter={prevChapter} nextChapter={nextChapter}>
      <ChapterContent chapter={chapter} />
    </TextbookLayout>
  );
};

// For static export, we need to define all possible paths
export async function getStaticPaths() {
  // Generate paths for chapters 1 through 20
  const paths = Array.from({ length: 20 }, (_, i) => ({
    params: { id: (i + 1).toString() }
  }));

  return {
    paths,
    fallback: false // Don't generate any other routes at runtime
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      id: params.id
    }
  };
}

export default ChapterPage;