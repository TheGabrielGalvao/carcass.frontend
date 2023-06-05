import { OptionItem } from "../../types/Option";

export function enumToSelectOptions<T>(
  enumObject: T,
  labels: Record<keyof T, string>
): OptionItem[] {
  return Object.entries(enumObject as unknown as Record<keyof T, unknown>).map(
    ([key, value]) => ({
      label: labels[key as keyof T] || key.replace(/([a-z])([A-Z])/g, "$1 $2"),
      value,
    })
  );
}
