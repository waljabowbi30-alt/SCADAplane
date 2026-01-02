export interface IProjectTemplate {
  key: string;
  name: string;
  description: string;
  identifier: string;
  states?: {
    name: string;
    group: "backlog" | "unstarted" | "started" | "completed" | "cancelled";
    color: string;
  }[];
  labels?: string[];
}

export const SCADA_TEMPLATES: IProjectTemplate[] = [
  {
    key: "scada-commissioning",
    name: "SCADA Commissioning",
    description: "End-to-end workflow for designing, building, and commissioning a new SCADA system.",
    identifier: "SCADA",
    states: [
      { name: "Backlog", group: "backlog", color: "#808080" },
      { name: "Design", group: "unstarted", color: "#3fa5eb" },
      { name: "Procurement", group: "unstarted", color: "#f59e0b" },
      { name: "HMI Dev", group: "started", color: "#f7ae59" },
      { name: "PLC Logic", group: "started", color: "#f7ae59" },
      { name: "FAT", group: "started", color: "#8b5cf6" },
      { name: "Installation", group: "started", color: "#10b981" },
      { name: "SAT", group: "started", color: "#10b981" },
      { name: "Handover", group: "completed", color: "#059669" },
    ],
    labels: ["HMI", "PLC", "Hardware", "Network", "Safety", "Historian", "OIT"],
  },
  {
    key: "maintenance-routine",
    name: "Maintenance Routine",
    description: "Recurring maintenance tasks for SCADA infrastructure, servers, and sensors.",
    identifier: "MAINT",
    states: [
      { name: "Scheduled", group: "unstarted", color: "#3fa5eb" },
      { name: "In Progress", group: "started", color: "#f59e0b" },
      { name: "Blocked", group: "started", color: "#ef4444" },
      { name: "Verified", group: "completed", color: "#10b981" },
    ],
    labels: ["Calibration", "Backup", "Patching", "Inspection", "Server", "Sensor"],
  },
  {
    key: "alarm-management",
    name: "Alarm Management",
    description: "Workflow for alarm rationalization, review, and suppression based on ISA 18.2.",
    identifier: "ALARM",
    states: [
      { name: "New Alarm", group: "backlog", color: "#ef4444" },
      { name: "Rationalization", group: "unstarted", color: "#f59e0b" },
      { name: "Shelved", group: "started", color: "#808080" },
      { name: "Suppressed", group: "started", color: "#808080" },
      { name: "Implemented", group: "completed", color: "#10b981" },
    ],
    labels: ["Critical", "Warning", "Info", "Nuisance", "Fleeting", "Stale"],
  },
  {
    key: "iot-rollout",
    name: "Industrial IoT Rollout",
    description: "Deployment of IIoT devices, gateways, and cloud connectivity.",
    identifier: "IIOT",
    states: [
      { name: "Site Survey", group: "unstarted", color: "#3fa5eb" },
      { name: "Config", group: "started", color: "#f59e0b" },
      { name: "Connectivity Test", group: "started", color: "#8b5cf6" },
      { name: "Data Validation", group: "started", color: "#10b981" },
      { name: "Live", group: "completed", color: "#059669" },
    ],
    labels: ["MQTT", "Gateway", "Sensor", "Dashboard", "Edge", "Cloud"],
  },
];
