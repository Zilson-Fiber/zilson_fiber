import { permanentRedirect } from "next/navigation";

export default function CarbonApplicationsRedirect() {
  permanentRedirect("/applications");
}
