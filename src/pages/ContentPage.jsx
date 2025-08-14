import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ContentModal from '../components/ContentModal';

const contentData = {
  'fire-fighting': {
    title: 'Fire Fighting',
    items: [
      {
        label: 'Introduction to Fire Safety',
        content: `Fire safety is a critical aspect of naval operations. Understanding the basic principles of fire behavior, prevention, and suppression is essential for all naval personnel.

Key Points:
• Fire requires three elements: fuel, oxygen, and heat (fire triangle)
• Removing any one element will extinguish the fire
• Prevention is always better than firefighting
• Quick response is crucial in ship environments

Types of fires on ships:
Class A - Ordinary combustibles (wood, paper, cloth)
Class B - Flammable liquids (oil, gasoline, paint)
Class C - Electrical equipment
Class D - Combustible metals`
      },
      {
        label: 'Fire Prevention Methods',
        content: `Fire prevention is the first line of defense aboard naval vessels. Proper maintenance and safety protocols significantly reduce fire risks.

Prevention Strategies:
• Regular inspection of electrical systems
• Proper storage of flammable materials
• Maintaining clean engine rooms and workshops
• Hot work permits for welding and cutting
• Smoking regulations in designated areas only

Housekeeping:
• Keep compartments clean and free of debris
• Proper disposal of oily rags and waste
• Secure loose items that could cause electrical shorts
• Regular cleaning of ventilation systems

Training Requirements:
• All crew must know fire prevention protocols
• Regular fire drills and equipment checks
• Understanding of ship's fire control systems`
      },
      {
        label: 'Emergency Procedures',
        content: `When fire is detected, immediate action is required. Follow these emergency procedures to ensure safety and effective firefighting.

Immediate Actions:
1. Sound the fire alarm
2. Notify damage control central
3. Evacuate non-essential personnel
4. Attack the fire if safe to do so
5. Isolate fuel sources if possible

Communication:
• Use proper fire reporting procedures
• Maintain communication with bridge
• Coordinate with damage control teams
• Update on fire status regularly

Evacuation:
• Know all escape routes from your area
• Help others who may need assistance
• Proceed to designated muster stations
• Account for all personnel in your section

Remember: Your safety is the top priority. Never attempt to fight a fire that puts you at risk.`
      },
      {
        label: 'Firefighting Equipment',
        content: `Naval vessels are equipped with various firefighting systems and portable equipment. Proper knowledge and maintenance of these systems is vital.

Fixed Systems:
• Sprinkler systems in living spaces
• Foam systems for flammable liquid fires
• CO2 flooding systems for engine rooms
• Halon systems for electronic spaces

Portable Equipment:
• Fire extinguishers (water, foam, CO2, dry chemical)
• Fire hoses with various nozzle types
• Self-contained breathing apparatus (SCBA)
• Firefighting suits and protective gear
• Thermal imaging cameras

Maintenance:
• Daily inspection of fire stations
• Weekly testing of alarms and communication
• Monthly inspection of breathing apparatus
• Annual testing of fixed systems

Always ensure equipment is ready for immediate use and report any deficiencies immediately.`
      }
    ]
  },
  'damage-control': {
    title: 'Damage Control',
    items: [
      {
        label: 'Basic Damage Control',
        content: `Damage control is the capability of a ship to survive in battle or accident conditions. It involves controlling flooding, maintaining stability, and ensuring the ship remains operational.

Fundamental Principles:
• Watertight integrity is paramount
• Control flooding at the source
• Maintain ship's stability and trim
• Preserve vital systems and equipment

Organization:
• Damage Control Central (DCC) coordinates all efforts
• Repair parties respond to casualties
• Scene leaders assess and report damage
• All hands participate in damage control

Key Systems:
• Watertight doors and hatches
• Damage control equipment
• Pumping and dewatering systems
• Shoring and patching materials

Training is continuous and essential for all crew members regardless of rating or department.`
      },
      {
        label: 'Flooding Control',
        content: `Controlling flooding is one of the most critical damage control skills. Quick and effective action can save the ship and crew.

Assessment:
• Determine the source and rate of flooding
• Evaluate structural damage
• Assess impact on ship stability
• Report findings to DCC immediately

Control Methods:
• Stop the flow at its source when possible
• Use collision mats for external holes
• Apply emergency patches and shoring
• Isolate flooded compartments
• Use pumps and eductors to remove water

Materials and Tools:
• Wooden plugs and wedges
• Collision mats and strongbacks
• Pipe patches and clamps
• Shoring materials (timber, steel)
• Portable pumps and eductors

Remember: Small leaks can quickly become major casualties. Address all flooding immediately and thoroughly.`
      },
      {
        label: 'Ship Stability',
        content: `Maintaining ship stability during damage control operations is crucial for survival. Understanding basic stability principles helps make informed decisions.

Stability Factors:
• Center of gravity (G)
• Center of buoyancy (B)
• Metacentric height (GM)
• Free surface effect of liquids

Effects of Damage:
• Flooding adds weight and raises center of gravity
• Free surface in partially flooded spaces reduces stability
• Loss of buoyancy affects trim and list
• Structural damage may compromise strength

Corrective Actions:
• Counter-flood to correct list (use carefully)
• Pump out flooded spaces when possible
• Transfer fluids to improve trim
• Jettison topside weight if necessary
• Shore damaged structures

Always coordinate stability actions with DCC and the Navigator to ensure ship safety.`
      },
      {
        label: 'Repair Procedures',
        content: `Effective repair procedures can restore damaged systems and maintain ship operations during casualties.

Priorities:
1. Life safety - rescue trapped personnel
2. Ship safety - prevent loss of ship
3. Mission capability - restore operational systems
4. Property protection - minimize damage

Repair Types:
• Emergency repairs - quick fixes to stop immediate threats
• Temporary repairs - short-term solutions for continued operation
• Permanent repairs - full restoration (usually in port)

Common Repairs:
• Pipe patching and clamping
• Electrical system isolation and rerouting
• Structural shoring and bracing
• Ventilation system repair
• Hull patching and sealing

Documentation:
• Report all damage and repairs to DCC
• Maintain records of materials used
• Document lessons learned
• Brief relief personnel on temporary repairs

Quality control ensures repairs will hold under operational conditions.`
      }
    ]
  },
  'nbcd': {
    title: 'NBCD (Nuclear, Biological, Chemical Defense)',
    items: [
      {
        label: 'NBCD Overview',
        content: `Nuclear, Biological, and Chemical Defense (NBCD) protects personnel and equipment from weapons of mass destruction and hazardous materials.

Types of Threats:
• Nuclear - radiation from weapons or reactor accidents
• Biological - disease-causing organisms and toxins
• Chemical - toxic industrial and warfare chemicals
• Radiological - radioactive material dispersal

Protection Principles:
• Time - limit exposure duration
• Distance - increase distance from source
• Shielding - use barriers to block contamination
• Individual protective equipment

Detection and Warning:
• Radiation detection instruments
• Chemical agent detectors
• Biological sampling equipment
• Warning systems and alarms

NBCD readiness requires constant training, proper equipment maintenance, and immediate response capabilities.`
      },
      {
        label: 'Protective Equipment',
        content: `Personal protective equipment (PPE) is the last line of defense against NBCD threats. Proper use and maintenance is essential.

Individual Equipment:
• Gas masks with appropriate filters
• Chemical protective suits
• Overboots and gloves
• Personal dosimeters for radiation
• Decontamination supplies

Collective Protection:
• Ventilation shut-downs
• Over-pressurization systems
• Citadel (protected spaces)
• Air filtration systems

Inspection and Maintenance:
• Daily inspection of personal masks
• Weekly testing of detection equipment
• Monthly inventory of protective supplies
• Quarterly training on equipment use

Fit Testing:
• All personnel must be fit-tested for masks
• Annual retesting required
• Immediate replacement of damaged equipment
• Proper storage to prevent degradation

Your protective equipment is only effective if properly maintained and correctly used.`
      },
      {
        label: 'Decontamination',
        content: `Decontamination removes or neutralizes harmful substances from personnel, equipment, and surfaces.

Types of Decontamination:
• Immediate - emergency removal of contaminants
• Operational - thorough cleaning during operations
• Thorough - complete decontamination post-incident

Personal Decontamination:
• Remove contaminated clothing carefully
• Wash with soap and water, head to toe
• Pay special attention to hair and fingernails
• Change into clean clothing
• Monitor for residual contamination

Equipment Decontamination:
• Use appropriate decontamination solutions
• Follow manufacturer's procedures
• Test for contamination removal
• Dispose of waste materials properly

Ship Decontamination:
• Wash down with decontamination solution
• Concentrate on horizontal surfaces
• Use proper drainage procedures
• Monitor and re-clean as necessary

Proper decontamination prevents spread of contamination and protects the crew.`
      },
      {
        label: 'Emergency Response',
        content: `Quick and proper response to NBCD incidents can save lives and preserve ship capability.

Immediate Actions:
1. Sound appropriate alarms
2. Don protective equipment
3. Take cover or seek protection
4. Report to designated stations
5. Await further instructions

Chemical Attack Response:
• Don mask within 9 seconds
• Assume Mission Oriented Protective Posture (MOPP)
• Seek overhead cover
• Minimize skin exposure
• Report to authorities

Biological Attack Response:
• Don protective equipment
• Avoid contaminated areas
• Report unusual illnesses
• Follow medical guidance
• Support detection efforts

Radiological Emergency:
• Monitor radiation levels
• Limit time in contaminated areas
• Use maximum shielding available
• Follow evacuation procedures if ordered
• Submit to medical monitoring

Remember: Panic is your enemy. Follow trained procedures and maintain discipline.`
      }
    ]
  },
  'first-aid': {
    title: 'First Aid',
    items: [
      {
        label: 'Basic First Aid Principles',
        content: `First aid is immediate care given to an injured or ill person until professional medical help arrives. Quick action can save lives.

Primary Assessment (ABCs):
• Airway - ensure airway is clear
• Breathing - check for breathing
• Circulation - check pulse and control bleeding
• Disability - assess for spinal injury
• Exposure - examine for other injuries

Scene Safety:
• Ensure area is safe before approaching
• Protect yourself from further danger
• Do not move victim unless absolutely necessary
• Call for medical assistance immediately

General Principles:
• Remain calm and reassuring
• Work quickly but carefully
• Do no harm
• Treat life-threatening conditions first
• Maintain victim's body temperature

Documentation:
• Record time and nature of injury
• Note treatment provided
• Monitor vital signs
• Report to medical officer`
      },
      {
        label: 'Bleeding Control',
        content: `Controlling bleeding is often the most critical first aid skill. Rapid blood loss can quickly become life-threatening.

Types of Bleeding:
• Arterial - bright red, spurting blood
• Venous - dark red, steady flow
• Capillary - oozing, minor bleeding

Control Methods:
1. Direct pressure on the wound
2. Elevation of injured limb
3. Pressure points (if direct pressure fails)
4. Tourniquet (as last resort)

Pressure Points:
• Temporal - for scalp wounds
• Facial - for face wounds
• Carotid - for neck wounds (VERY carefully)
• Subclavian - for shoulder/upper arm
• Brachial - for arm wounds
• Femoral - for leg wounds

Tourniquet Use:
• Only for severe limb bleeding
• Apply 2-3 inches above wound
• Tighten until bleeding stops
• Mark time of application
• Do not remove once applied

Remember: Clean hands and equipment when possible, but don't delay treatment for life-threatening bleeding.`
      },
      {
        label: 'Shock Treatment',
        content: `Shock is a life-threatening condition where the body's organs don't get enough blood flow. Early recognition and treatment is crucial.

Types of Shock:
• Hypovolemic - blood or fluid loss
• Cardiogenic - heart failure
• Neurogenic - spinal cord injury
• Anaphylactic - severe allergic reaction

Signs and Symptoms:
• Rapid, weak pulse
• Rapid, shallow breathing
• Cool, clammy skin
• Restlessness or anxiety
• Thirst
• Decreased blood pressure
• Confusion or unconsciousness

Treatment:
• Control obvious bleeding
• Position victim properly (legs elevated 8-12 inches)
• Maintain normal body temperature
• Loosen tight clothing
• Reassure and comfort victim
• Monitor vital signs
• Prepare for transport

Positioning:
• Conscious victims - semi-sitting
• Unconscious victims - recovery position
• Spinal injury suspected - don't move
• Breathing difficulties - sitting up

Do not give food or water to shock victims.`
      },
      {
        label: 'Burns and Heat Injuries',
        content: `Burns are common shipboard injuries. Proper treatment can minimize damage and speed healing.

Types of Burns:
• First degree - redness, mild swelling
• Second degree - blisters, severe pain
• Third degree - charred skin, little pain

Thermal Burns:
• Remove victim from heat source
• Cool burn with water (not ice)
• Remove jewelry before swelling
• Cover with clean, dry cloth
• Do not break blisters
• Treat for shock

Chemical Burns:
• Flush immediately with water
• Remove contaminated clothing
• Continue flushing for 15-20 minutes
• Do not neutralize chemicals
• Seek immediate medical attention

Electrical Burns:
• Ensure power is off before touching victim
• Check for entrance and exit wounds
• Monitor for cardiac problems
• Treat burn wounds
• Transport immediately

Heat Exhaustion/Heat Stroke:
• Move to cool area
• Remove excess clothing
• Apply cool water to skin
• Fan victim
• Give water if conscious
• Monitor vital signs

Never apply ice, butter, or ointments to burns.`
      }
    ]
  },
  'about': {
    title: 'About the App',
    items: [
      {
        label: 'Application Overview',
        content: `The Bangladesh Navy Mobile Guide is a comprehensive training application designed for naval personnel and maritime professionals.

Purpose:
This application provides essential training materials and reference guides for critical naval operations including fire fighting, damage control, NBCD defense, and first aid procedures.

Features:
• Offline access to all training materials
• Interactive content with detailed procedures
• Regular updates with latest naval protocols
• Mobile-optimized for use aboard ships
• Comprehensive reference library

Target Audience:
• Bangladesh Navy personnel
• Maritime professionals
• Naval training institutions
• Emergency response teams

The app serves as a quick reference guide and training aid to supplement formal naval education and ensure readiness in emergency situations.`
      },
      {
        label: 'How to Use',
        content: `This application is designed for easy navigation and quick access to critical information.

Navigation:
• Use the home button to return to the main menu
• Tap on any training module to access its content
• Tap on specific topics to view detailed information
• Swipe through the blog carousel for latest updates

Features:
• All content is available offline once loaded
• Use the search function to find specific topics
• Bookmark important procedures for quick access
• Share information with team members

Tips for Effective Use:
• Familiarize yourself with all modules
• Practice accessing information quickly
• Use during training exercises
• Review content regularly to maintain proficiency
• Provide feedback for improvements

Best Practices:
• Keep the app updated with latest content
• Use in conjunction with practical training
• Share knowledge with fellow crew members
• Report any technical issues promptly`
      },
      {
        label: 'Emergency Contacts',
        content: `In case of emergency, use these important contact numbers and procedures.

Ship Emergency Contacts:
• Damage Control Central: Internal phone system
• Medical Officer: Internal phone system
• Bridge: Internal phone system
• Engineering: Internal phone system

Shore Emergency Contacts:
• Bangladesh Navy Headquarters: +880-2-XXXXXXX
• Coastal Guard Emergency: 999
• Medical Emergency: 199
• Fire Service: 199

Radio Frequencies:
• Emergency frequency: 2182 kHz / VHF Ch 16
• Navy Operations: As assigned
• Coast Guard: VHF Ch 16
• Search and Rescue: 121.5 MHz

Emergency Procedures:
1. Assess the situation
2. Ensure personal safety
3. Call for help using proper procedures
4. Provide aid within your capabilities
5. Follow up with detailed reports

Important: This app is a reference tool. Always follow your ship's specific emergency procedures and contact your chain of command in actual emergencies.`
      },
      {
        label: 'App Information',
        content: `Bangladesh Navy Mobile Guide
Version 1.0.0

Developed for the Bangladesh Navy to provide mobile access to essential training materials and emergency procedures.

Features:
• Complete offline functionality
• Regular content updates
• Mobile-optimized interface
• Comprehensive training modules
• Emergency reference guides

Technical Support:
For technical issues or content suggestions, contact your training department or IT support personnel.

Disclaimer:
This application is intended as a training aid and reference tool. It does not replace official naval procedures, formal training, or professional judgment. Always follow your ship's specific procedures and chain of command.

Updates:
The application is regularly updated with new content and improved features. Check for updates periodically to ensure you have the latest information.

Copyright:
© 2024 Bangladesh Navy. All rights reserved. This application and its content are for official use only.`
      }
    ]
  }
};

const ContentPage = () => {
  const { section } = useParams();
  const navigate = useNavigate();
  const [selectedItem, setSelectedItem] = useState(null);

  const sectionData = contentData[section];

  if (!sectionData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">Section Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Return Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-primary-foreground p-4">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/')}
            className="text-primary-foreground hover:bg-primary-foreground/20"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-bold">{sectionData.title}</h1>
          <div className="w-10"></div> {/* Spacer for centering */}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 max-w-md mx-auto">
        <div className="space-y-3">
          {sectionData.items.map((item, index) => (
            <Button
              key={index}
              onClick={() => setSelectedItem(item)}
              className="w-full h-auto p-4 text-left justify-start bg-card hover:bg-muted border border-border"
              variant="outline"
            >
              <span className="text-card-foreground font-medium">
                {item.label}
              </span>
            </Button>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ContentModal
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        title={selectedItem?.label}
        content={selectedItem?.content}
      />
    </div>
  );
};

export default ContentPage;