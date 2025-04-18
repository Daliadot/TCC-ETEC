<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class AdminController extends Controller
{
    /**
     * funcionando
     */
    public function index()
    {
        $regAdmin = Admin::all();
        $contador = $regAdmin->count();

        return Response()->json($regAdmin);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'NM_admin' => 'required',
            'email' => 'required',
            'senha' => 'required'
        ]);
    
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Registros inválidos.',
                'errors' => $validator->errors()
            ], 400);
        }
    
        if ($admin->save()) {
            return response()->json([
                'success' => true,
                'message' => 'Admin cadastrado com sucesso.',
                'data' => $registros
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Erro ao cadastrar admin.',
            ], 500);
        }
    }
    

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $regAdmin = admin::find($id);

        if ($regAdmin) {
            return response()->json([
                'success' => true,
                'message' => 'admin encontrado',
                'data' => $regAdmin
            ], 200);
        }else{
            return response()->json([
                'success' => false,
                'message' => 'admin não encontrado'
            ], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validator = Validator::make($request->all(), [
            'NM_admin' => 'required',
            'email' => 'required',
            'senha' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'registros inválidos',
                'errors' => $validator->errors()
            ], 400);
        }

        $regAdminBanco = admin::find($id);

        if (!$regAdminBanco) {
            return respone()->json([
                'success' => false,
                'message' => 'admin não encontrado',
            ], 404);
        }

        $regAdminBanco->NM_admin = $request->NM_admin;
        $regAdminBanco->email = $request->email;
        $regAdminBanco->senha = $request->senha;


        if ($regAdminBanco->save()) {
            return response()->json([
                'success' => true,
                'message' => 'admin atualizado com sucesso',
                'data' => $regAdminBanco
            ], 201);
        } else {
            return response()->json([
                'success' => false,
                'message' => 'erro ao atualizar o formulario'
            ], 500);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $regAdmin = admin::find($id);

        if (!$regAdmin) {
            return response()->json([
                'success' => false,
                'message' => 'admin não encontrado',   
            ], 404);
        }

        if ($regAdmin->delete()) {
            return response()->json([
                'success' => true,
                'message' => 'admin deletado com sucesso',
            ],200);
        }
    }
}
