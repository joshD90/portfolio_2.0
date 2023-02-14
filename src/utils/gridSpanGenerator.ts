import { Project } from "../assets/projects/projectArray";

const gridSpanGenerator = (screenWidth: number, project: Project): number[] => {
  if (screenWidth > 1280) return project.gridSpan.xl;
  if (screenWidth > 1024) return project.gridSpan.lg;
  if (screenWidth > 768) return project.gridSpan.md;
  return [1, 2];
};

export default gridSpanGenerator;
