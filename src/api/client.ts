const BASE_URL = "https://3-37-186-61.nip.io";

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
};

export async function request<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const { body, ...requestOptions } = options;

  const headers = new Headers(requestOptions.headers);

  if (body !== undefined) {
    headers.set("Content-Type", "application/json");
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    ...requestOptions,
    headers,
    body: body === undefined ? undefined : JSON.stringify(body),
  });

  if (!response.ok) {
    const errorData = (await response.json().catch(() => null)) as {
      message?: string;
    } | null;

    throw new Error(errorData?.message ?? "서버 요청에 실패했습니다.");
  }

  return (await response.json()) as T;
}
