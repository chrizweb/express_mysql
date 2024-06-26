import { pool } from "../db.js";

export const getEmployees = async(req, res) =>{
  
  try {
    const [rows] = await pool.query('SELECT * FROM employee')
    res.json(rows)
  } catch (error) {
    return res.status(500).json({
      msg:'something goes wrong'
    })
  }
}

export const getEmployeeId = async(req, res) =>{
  const id = req.params.id
  try {
    const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

    if(rows.length <= 0){
    return res.status(404).json({
      msg:'Employee not found'
    })
  }
  res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      msg:'something goes wrong'
    })
  }
}

export const createEmployee = async(req, res) =>{
  const {name, salary} = req.body
  try {
    const [rows] = await pool.query('INSERT INTO employee (name, salary)  VALUE (?,?)',[name, salary])
    res.send({
    id: rows.insertId,
    name,
    salary
  })
  } catch (error) {
    return res.status(500).json({
      msg:'something goes wrong'
    })
  }
}

export const updateEmployee = async(req, res) =>{
  const {id} = req.params
  const {name, salary} = req.body
  try {
    const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id])
    
    if(result.affectedRows === 0){
    return res.status(404).json({
      msg:'Employee not found'
    })
  }  

  const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [id])

  res.json(rows[0])
  } catch (error) {
    return res.status(500).json({
      msg:'something goes wrong'
    })
  }
 
}

export const deleteEmployee = async(req, res) =>{
  const id = req.params.id
  try {
    const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [id])

    if(result.affectedRows <= 0){
    return res.status(404).json({
      msg:'Employee not found'
    })
  }

  res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({
      msg:'something goes wrong'
    })
  }
}

