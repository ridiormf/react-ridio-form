import { useState } from "react";

export interface UseFormOptions<TValues extends Record<string, unknown>> {
  readonly initialValues: TValues;
}

export interface UseFormReturn<TValues extends Record<string, unknown>> {
  readonly values: TValues;
}

export function useForm<TValues extends Record<string, unknown>>(
  options: UseFormOptions<TValues>,
): UseFormReturn<TValues> {
  const [values] = useState<TValues>(options.initialValues);

  return { values };
}
