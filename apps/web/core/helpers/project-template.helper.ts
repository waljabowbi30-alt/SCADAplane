import { IProjectTemplate } from "@plane/constants";
import { IssueLabelService } from "@/services/issue/issue_label.service";
import { ProjectStateService } from "@/services/project/project-state.service";

const projectStateService = new ProjectStateService();
const issueLabelService = new IssueLabelService();

export const applyTemplate = async (workspaceSlug: string, projectId: string, template: IProjectTemplate) => {
  try {
    // 1. Handle States
    if (template.states && template.states.length > 0) {
      // Fetch existing default states
      const existingStates = await projectStateService.getStates(workspaceSlug, projectId);

      // We want to replace defaults with template states.
      // Strategy: Create new states, then delete old ones (except if they are system required, but usually 'backlog', 'unstarted', etc are customizable).
      // Note: Deleting states that have issues might be tricky, but this is a fresh project.

      // However, we can't delete the *last* state in a group usually.
      // Safer approach: Create new states first.

      for (const state of template.states) {
        await projectStateService.createState(workspaceSlug, projectId, {
          name: state.name,
          color: state.color,
          group: state.group,
          description: `Created from ${template.name} template`,
        });
      }

      // Cleanup: Delete the default states if possible to keep it clean.
      // This is "best effort".
      for (const oldState of existingStates) {
        try {
          await projectStateService.deleteState(workspaceSlug, projectId, oldState.id);
        } catch (e) {
          console.warn(`Could not delete default state ${oldState.name}`, e);
        }
      }
    }

    // 2. Handle Labels
    if (template.labels && template.labels.length > 0) {
      for (const label of template.labels) {
        await issueLabelService.createIssueLabel(workspaceSlug, projectId, {
          name: label,
          color: "#3fa5eb", // Default blue-ish
        });
      }
    }
  } catch (error) {
    console.error("Failed to apply project template", error);
    // We do not re-throw because the project was created successfully,
    // and we don't want to block the user flow entirely.
  }
};
