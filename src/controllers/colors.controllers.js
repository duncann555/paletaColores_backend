import Color from "../models/color.js";

export const prueba = (req, res) => {
  console.log("Desde el controlador de prueba de colores");
  res.send("Prueba desde el controlador de colores");
};

export const crearColor = async (req, res) => {
  try {
    const nuevoColor = new Color(req.body);
    await nuevoColor.save();

    res.status(201).json({
      mensaje: "Color creado correctamente",
      color: nuevoColor,
    });
  } catch (error) {
    console.error("Error al crear color:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al crear el color",
      error: error.message,
    });
  }
};

export const listarColor = async (req, res) => {
  try {
    const colores = await Color.find();
    res.status(200).json(colores);
  } catch (error) {
    console.error("Error al listar colores:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al listar los colores",
      error: error.message,
    });
  }
};

export const obtenerColorID = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);

    if (!colorBuscado) {
      return res.status(404).json({ mensaje: "No se encontró el color" });
    }

    res.status(200).json(colorBuscado);
  } catch (error) {
    console.error("Error al buscar color:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al obtener el color",
      error: error.message,
    });
  }
};

export const borrarColorID = async (req, res) => {
  try {
    const colorBuscado = await Color.findById(req.params.id);

    if (!colorBuscado) {
      return res.status(404).json({ mensaje: "No se encontró el color" });
    }

    await Color.findByIdAndDelete(req.params.id);

    res.status(200).json({ mensaje: "El color fue eliminado correctamente" });
  } catch (error) {
    console.error("Error al borrar color:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al borrar el color",
      error: error.message,
    });
  }
};

export const editarColorID = async (req, res) => {
  try {
    const colorEditado = await Color.findByIdAndUpdate(
      req.params.id,
      {
        nombre: req.body.nombre,
        valor: req.body.valor,
      },
      { new: true, runValidators: true }  // 🔥 esto es CLAVE
    );

    if (!colorEditado) {
      return res.status(404).json({ mensaje: "No se encontró el color" });
    }

    res.status(200).json({
      mensaje: "Color editado correctamente",
      color: colorEditado,
    });
  } catch (error) {
    console.error("Error al editar color:", error);
    res.status(500).json({
      mensaje: "Ocurrió un error al editar el color",
      error: error.message,
    });
  }
};


