defmodule LinkedList do
  defstruct [
    :head,
    :tail
  ]

  defp raise_argument_error(arg) do
    raise ArgumentError, message: "invalid argument: #{arg}"
  end

  def new(data \\ nil) do
    %__MODULE__{
      head: data
    }
  end

  def push(%__MODULE__{} = list, data) do
    %__MODULE__{head: data, tail: list}
  end

  def from_list([]) do
    raise_argument_error("empty list")
  end

  def from_list([h | t]) do
    from_list_p(new(h), t)
  end

  defp from_list_p(list, []) do
    list
  end

  defp from_list_p(list, [h | t]) do
    list
    |> push(h)
    |> from_list_p(t)
  end

  def to_list(l) do
    to_list_p(l, [])
  end

  defp to_list_p(%__MODULE__{head: head, tail: nil}, acc) do
    [head | acc]
  end

  defp to_list_p(%__MODULE__{head: head, tail: tail}, acc) do
    to_list_p(tail, [head | acc])
  end
end
